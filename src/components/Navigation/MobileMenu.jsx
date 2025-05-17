import React from 'react';
import Icon from '../shared/Icon';

const MobileMenu = ({ isOpen, onClose, links }) => {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href;
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
      onClose();
    }
  };

  return (
    <div 
      className={`fixed inset-0 bg-primary z-50 flex flex-col items-center justify-center ${
        isOpen ? '' : 'hidden'
      }`}
    >
      <button 
        className="absolute top-6 right-6 text-white"
        onClick={onClose}
      >
        <div className="w-10 h-10 flex items-center justify-center">
          <Icon name="ri-close-line" size="2x" />
        </div>
      </button>
      
      <div className="flex flex-col space-y-8 text-center">
        {links.map(link => (
          <a
            key={link.id}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="text-white text-xl hover:text-secondary transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;