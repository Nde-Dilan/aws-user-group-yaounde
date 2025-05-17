import React from 'react';
import FormField from './FormField';

function TextArea({ 
  label, 
  id, 
  value, 
  onChange, 
  placeholder,
  rows = 4, 
  required = false, 
  error = null,
  className = ""
}) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <FormField label={label} id={id} required={required} error={error} className={className}>
      <textarea
        id={id}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        rows={rows}
        className="w-full px-4 py-3 border border-gray-300 rounded focus:border-secondary"
      />
    </FormField>
  );
}

export default TextArea;