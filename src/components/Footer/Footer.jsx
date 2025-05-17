import React from 'react';
import Icon from '../shared/Icon';
import FooterLinks from './FooterLinks';

const Footer = ({ data }) => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <a href="#" className="text-white text-2xl font-bold flex items-center mb-4">
              <div className="w-10 h-10 flex items-center justify-center mr-2">
                <Icon name={data.logo.icon} size="2x" />
              </div>
              <span className="whitespace-pre-line">{data.logo.text}</span>
            </a>
            <p className="text-gray-300 text-sm">{data.description}</p>
          </div>
          
          <FooterLinks 
            title={data.links.quickLinks.title} 
            links={data.links.quickLinks.items} 
          />
          
          <FooterLinks 
            title={data.links.resources.title} 
            links={data.links.resources.items} 
          />
          
          <FooterLinks 
            title={data.links.legal.title} 
            links={data.links.legal.items} 
          />
        </div>
        
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">{data.copyright}</p>
          <div className="flex space-x-4">
            {data.social.map((platform, index) => (
              <a 
                key={index}
                href={platform.url} 
                className="text-gray-400 hover:text-secondary transition-colors"
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <Icon name={platform.icon} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;