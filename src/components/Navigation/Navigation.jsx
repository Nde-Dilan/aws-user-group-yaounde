import React, { useState, useEffect } from 'react';
import Icon from '../shared/Icon';

const Navigation = ({ data, onMenuToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section logic
      const sections = document.querySelectorAll('section');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href;
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-white text-2xl font-bold flex items-center">
          <div className="w-10 h-10 flex items-center justify-center mr-2">
            <Icon name={data.logo.icon} size="2x" />
          </div>
          <span>{data.logo.text}</span>
        </a>
        
        <div className="hidden md:flex space-x-8">
          {data.links.map(link => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`nav-link text-white hover:text-secondary transition-colors ${
                activeSection === link.id ? 'active' : ''
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        
        <button 
          className="md:hidden text-white"
          onClick={onMenuToggle}
        >
          <div className="w-10 h-10 flex items-center justify-center">
            <Icon name="ri-menu-line" size="2x" />
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;