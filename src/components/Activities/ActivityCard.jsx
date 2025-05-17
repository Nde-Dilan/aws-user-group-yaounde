import React from 'react';
import Icon from '../shared/Icon';

const ActivityCard = ({ activity }) => {
  return (
    <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow relative overflow-hidden group">
      <div className="absolute inset-0 bg-primary/5 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      <div className="relative z-10">
        <div className="w-20 h-20 flex items-center justify-center bg-secondary/10 rounded-full mb-6 mx-auto">
          <Icon name={activity.icon} size="2x" className="text-secondary" />
        </div>
        <h3 className="text-xl font-bold text-primary mb-4">{activity.title}</h3>
        <p className="text-gray-600">{activity.description}</p>
      </div>
    </div>
  );
};

export default ActivityCard;