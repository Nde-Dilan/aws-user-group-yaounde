import React from 'react';

const Button = ({ children, type = "primary", href = "#", onClick, className = "" }) => {
  const buttonStyles = {
    primary: "bg-secondary hover:bg-secondary/90 text-primary",
    secondary: "bg-white/10 hover:bg-white/20 text-white border border-white/30",
    tertiary: "bg-gray-100 hover:bg-gray-200 text-gray-700"
  };

  return (
    <a
      href={href}
      onClick={onClick}
      className={`${buttonStyles[type]} font-bold py-3 px-8 rounded-button whitespace-nowrap transition-all ${className}`}
    >
      {children}
    </a>
  );
};

export default Button;