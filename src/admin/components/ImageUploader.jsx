import React, { useState, useRef, useEffect } from "react";
import FormField from "./FormField";
import Icon from "../../components/shared/Icon";
import { BASE_URL } from "../../data";

function ImageUploader({
  label,
  id,
  value,
  onChange,
  required = false,
  error = null,
  previewSize = "medium",
  className = "",
  fileNamePrefix = "img",
}) {
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(value);
  const [isLocalFile, setIsLocalFile] = useState(false);

  // Add this missing state variable
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    setPreview(value);
  }, [value]);

  const previewSizes = {
    small: "h-32 w-32",
    medium: "h-48 w-full",
    large: "h-64 w-full",
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Generate a unique filename
    const timestamp = Date.now();
    const extension = file.name.split(".").pop();
    const fileName = `${fileNamePrefix}-${timestamp}.${extension}`;

    
    // Show loading state
    setIsUploading(true);

    try {
      // Create form data
      const formData = new FormData();
      formData.append("image", file);
      formData.append("fileName", fileName);
      formData.append("prefix", fileNamePrefix);

      // If replacing an existing image, send its path
      if (value && !value.startsWith("http")) {
        formData.append("previousImage", value);
      }

      // Upload to API
      const response = await fetch(
        `${BASE_URL}/api/images/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const result = await response.json();

      if (result.success) {
        // Update preview and notify parent
        setPreview(result.imageUrl);
        onChange(result.imageUrl);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert(`Error uploading image: ${error.message}`);
    } finally {
      setIsUploading(false);
    }
  };

  const handleUrlChange = (e) => {
    const url = e.target.value;
    setPreview(url);
    setIsLocalFile(false);
    onChange(url);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  // Resolve the image source - local or remote
  const getImageSource = () => {
    if (!preview) return "";

    if (typeof preview === "string" && preview.startsWith("local:")) {
      const fileName = preview.replace("local:", "");
      const storedImage = localStorage.getItem(`image_${fileName}`);
      if (storedImage) {
        try {
          const imageData = JSON.parse(storedImage);
          return imageData.dataUrl;
        } catch (e) {
          console.error("Failed to parse stored image data:", e);
          return "";
        }
      }
      return "";
    }

    return preview;
  };

  return (
    <FormField
      label={label}
      id={id}
      required={required}
      error={error}
      className={className}
    >
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={handleClick}
            disabled={isUploading}
            className={`bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-button flex items-center ${
              isUploading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isUploading ? (
              <>
                <Icon name="ri-loader-2-line" className="animate-spin mr-2" />
                Uploading...
              </>
            ) : (
              <>
                <Icon name="ri-upload-line" className="mr-2" />
                Upload Image
              </>
            )}
          </button>
          <p className="text-sm text-gray-500">or</p>
          <input
            type="text"
            placeholder="Enter image URL"
            value={
              typeof value === "string" && !value.startsWith("local:")
                ? value
                : ""
            }
            onChange={handleUrlChange}
            className="flex-1 px-4 py-2 border border-gray-300 rounded focus:border-secondary"
          />
        </div>

        <input
          ref={fileInputRef}
          type="file"
          id={id}
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />

        {preview && (
          <div className="mt-4">
            <div
              className={`${previewSizes[previewSize]} bg-gray-100 rounded overflow-hidden relative`}
            >
              <img
                src={getImageSource()}
                alt="Preview"
                className="object-cover w-full h-full"
              />
              {isLocalFile && (
                <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  <Icon name="ri-hard-drive-2-line" className="mr-1" />
                  Local File
                </div>
              )}
              <button
                type="button"
                onClick={() => {
                  if (value && value.startsWith("local:")) {
                    const fileName = value.replace("local:", "");
                    localStorage.removeItem(`image_${fileName}`);
                  }
                  setPreview("");
                  setIsLocalFile(false);
                  onChange("");
                }}
                className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md transition-colors"
              >
                <Icon name="ri-delete-bin-line" />
              </button>
            </div>
          </div>
        )}
      </div>
    </FormField>
  );
}

export default ImageUploader;
