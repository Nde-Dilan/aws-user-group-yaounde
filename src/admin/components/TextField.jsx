import React from 'react';
import FormField from './FormField';

function TextField({ 
  label, 
  id, 
  value, 
  onChange, 
  placeholder, 
  type = "text", 
  required = false, 
  error = null,
  className = ""
}) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <FormField label={label} id={id} required={required} error={error} className={className}>
      <input
        type={type}
        id={id}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-gray-300 rounded focus:border-secondary"
      />
    </FormField>
  );
}

export default TextField;