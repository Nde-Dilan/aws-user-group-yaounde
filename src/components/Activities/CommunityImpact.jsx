import React from 'react';
import Icon from '../shared/Icon';

const CommunityImpact = ({ data }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div 
        className="h-64 bg-gray-200" 
        style={{
          backgroundImage: `url('${data.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-primary mb-4">{data.title}</h3>
        <p className="text-gray-600 mb-4">{data.description}</p>
        <ul className="space-y-2 text-gray-600 mb-6">
          {data.achievements.map((achievement, index) => (
            <li key={index} className="flex items-start">
              <div className="w-5 h-5 flex items-center justify-center mr-2 mt-1 text-secondary">
                <Icon name="ri-check-line" />
              </div>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
        <button className="bg-secondary hover:bg-secondary/90 text-primary font-bold py-2 px-6 rounded-button whitespace-nowrap transition-all">
          {data.ctaText}
        </button>
      </div>
    </div>
  );
};

export default CommunityImpact;