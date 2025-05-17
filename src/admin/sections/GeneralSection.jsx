import React from "react";
import TextField from "../components/TextField";
import ColorPicker from "../components/ColorPicker";
import SectionHeader from "../../components/shared/SectionHeader";

function GeneralSection({ data, onChange }) {
  const handleChange = (field, value) => {
    onChange({
      ...data,
      [field]: value,
    });
  };

  const handleThemeColorChange = (colorKey, value) => {
    onChange({
      ...data,
      theme: {
        ...data.theme,
        colors: {
          ...data.theme.colors,
          [colorKey]: value,
        },
      },
    });
  };

  return (
    <div>
      <SectionHeader
        title="General Settings"
        subtitle="Configure basic site information"
      />

      <form className="space-y-6">
        <TextField
          label="Website Title"
          id="site-title"
          value={data.title || ""}
          onChange={(value) => handleChange("title", value)}
          placeholder="Enter website title"
          required
        />

        <TextField
          label="Favicon URL"
          id="favicon"
          value={data.favicon || ""}
          onChange={(value) => handleChange("favicon", value)}
          placeholder="Enter favicon URL (e.g., /favicon.ico)"
        />

        <div className="border-t border-gray-200 pt-6 mt-6">
          <h3 className="text-lg font-semibold text-primary mb-4">
            Theme Colors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ColorPicker
              label="Primary Color"
              id="primary-color"
              value={data.theme.colors.primary}
              onChange={(value) => handleThemeColorChange("primary", value)}
            />

            <ColorPicker
              label="Secondary Color"
              id="secondary-color"
              value={data.theme.colors.secondary}
              onChange={(value) => handleThemeColorChange("secondary", value)}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default GeneralSection;
