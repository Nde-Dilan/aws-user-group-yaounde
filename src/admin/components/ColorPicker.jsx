import React from 'react';
import FormField from './FormField';

function ColorPicker({ 
  label, 
  id, 
  value, 
  onChange, 
  required = false, 
  error = null,
  className = ""
}) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <FormField label={label} id={id} required={required} error={error} className={className}>
      <div className="flex items-center">
        <input
          type="color"
          id={id}
          value={value}
          onChange={handleChange}
          className="h-10 w-14 border-0 p-0 mr-3"
        />
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="w-32 px-4 py-3 border border-gray-300 rounded focus:border-secondary"
        />
      </div>
    </FormField>
  );
}

export default ColorPicker;