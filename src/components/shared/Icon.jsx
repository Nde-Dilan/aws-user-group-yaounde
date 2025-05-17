import React from 'react';

const Icon = ({ name, size = "", className = "" }) => {
  const sizeClass = size ? `ri-${size}` : "";
  return <i className={`${name} ${sizeClass} ${className}`}></i>;
};

export default Icon;