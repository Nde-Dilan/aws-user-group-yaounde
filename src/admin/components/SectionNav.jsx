import React from 'react';

function SectionNav({ sections, activeSection, onSectionChange }) {
  return (
    <nav className="bg-white rounded-lg shadow-md overflow-hidden">
      <ul className="divide-y divide-gray-100">
        {sections.map(section => (
          <li key={section.id}>
            <button
              className={`w-full text-left px-6 py-4 transition-colors ${
                activeSection === section.id 
                  ? 'bg-primary/5 border-l-4 border-secondary text-primary font-medium' 
                  : 'hover:bg-gray-50'
              }`}
              onClick={() => onSectionChange(section.id)}
            >
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SectionNav;