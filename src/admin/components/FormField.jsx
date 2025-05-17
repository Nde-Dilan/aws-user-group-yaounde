import React from 'react';

function FormField({ 
  label, 
  id,
  error,
  required = false, 
  className = "", 
  children 
}) {
  return (
    <div className={`mb-6 ${className}`}>
      <label 
        htmlFor={id} 
        className="block text-gray-700 font-medium mb-2"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default FormField;