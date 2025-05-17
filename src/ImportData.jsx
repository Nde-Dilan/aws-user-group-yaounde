import React, { useRef } from 'react';
import Icon from './components/shared/Icon';

function ImportData({ onImport }) {
  const fileInputRef = useRef(null);
  
  const handleClick = () => {
    fileInputRef.current.click();
  };
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        try {
          const data = JSON.parse(reader.result);
          onImport(data);
        } catch (error) {
          alert('Error parsing JSON file. Please make sure it is valid JSON.');
          console.error('Import error:', error);
        }
      };
      reader.readAsText(file);
    }
  };
  
  return (
    <div>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-button font-bold transition-colors flex items-center"
      >
        <Icon name="ri-upload-2-line" className="mr-2" />
        Import Data
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}

export default ImportData;