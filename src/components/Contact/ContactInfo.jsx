import React from 'react';
import Icon from '../shared/Icon';

const ContactInfo = ({ data }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-8 h-full">
      <h3 className="text-2xl font-bold text-primary mb-6">{data.title}</h3>
      
      <div className="space-y-6 mb-8">
        {data.items.map((item, index) => (
          <div key={index} className="flex items-start">
            <div className="w-10 h-10 flex items-center justify-center bg-secondary/10 rounded-full mr-4 mt-1">
              <Icon name={item.icon} className="text-secondary" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
              <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      
      <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
      <div className="flex space-x-4">
        {data.social.map((platform, index) => (
          <a 
            key={index}
            href={platform.url} 
            className="w-10 h-10 flex items-center justify-center bg-primary rounded-full text-white hover:bg-secondary hover:text-primary transition-colors"
          >
            <Icon name={platform.icon} />
          </a>
        ))}
      </div>
      
      <div className="mt-8 pt-8 border-t border-gray-200">
        <h4 className="font-semibold text-gray-800 mb-4">{data.newsletter.title}</h4>
        <p className="text-gray-600 mb-4">{data.newsletter.description}</p>
        <div className="flex">
          <input 
            type="email" 
            placeholder={data.newsletter.inputPlaceholder}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l focus:border-secondary"
          />
          <button className="bg-secondary hover:bg-secondary/90 text-primary font-bold py-2 px-4 rounded-r rounded-button whitespace-nowrap transition-all">
            {data.newsletter.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;