import React from 'react';

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{title}</h2>
      <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
      <p className="max-w-3xl mx-auto text-gray-600">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;