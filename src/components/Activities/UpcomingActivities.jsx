import React from 'react';
import Icon from '../shared/Icon';

const UpcomingActivities = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-primary mb-4">{data.title}</h3>
      <div className="space-y-4">
        {data.events.map((event, index) => (
          <div key={event.id} className={`${index < data.events.length - 1 ? 'border-b border-gray-100 pb-4' : ''}`}>
            <div className="flex items-center mb-2">
              <div className="w-5 h-5 flex items-center justify-center mr-2 text-secondary">
                <Icon name="ri-calendar-event-line" />
              </div>
              <h4 className="font-semibold text-gray-800">{event.title}</h4>
            </div>
            <p className="text-sm text-gray-600 mb-1">
              {event.date} {event.schedule ? event.schedule : ''} • {event.time}
            </p>
            <p className="text-sm text-gray-600">{event.location}</p>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-6 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-button whitespace-nowrap transition-all">
        {data.ctaText}
      </button>
    </div>
  );
};

export default UpcomingActivities;