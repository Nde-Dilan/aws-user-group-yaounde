import React from 'react';

const FooterLinks = ({ title, links }) => {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">{title}</h4>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a 
              href={link.href} 
              className="text-gray-300 hover:text-secondary transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;