import React from 'react';
import Icon from '../shared/Icon';

const EventCard = ({ event, type }) => {
  const isPast = type === 'past';

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div 
        className={`h-48 bg-gray-200 ${!isPast ? 'relative' : ''}`} 
        style={{
          backgroundImage: `url('${event.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {!isPast && (
          <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
            {event.date}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2">{event.title}</h3>
        
        <div className="flex items-center mb-3 text-gray-600">
          <div className="w-5 h-5 flex items-center justify-center mr-2">
            <Icon name={isPast ? "ri-calendar-line" : "ri-time-line"} />
          </div>
          <span className="text-sm">{isPast ? event.date : event.time}</span>
        </div>
        
        <div className="flex items-center mb-3 text-gray-600">
          <div className="w-5 h-5 flex items-center justify-center mr-2">
            <Icon name="ri-map-pin-line" />
          </div>
          <span className="text-sm">{event.location}</span>
        </div>
        
        {event.speaker && (
          <div className="flex items-center mb-4 text-gray-600">
            <div className="w-5 h-5 flex items-center justify-center mr-2">
              <Icon name="ri-user-line" />
            </div>
            <span className="text-sm">Speaker: {event.speaker}</span>
          </div>
        )}
        
        {event.prize && (
          <div className="flex items-center mb-4 text-gray-600">
            <div className="w-5 h-5 flex items-center justify-center mr-2">
              <Icon name="ri-trophy-line" />
            </div>
            <span className="text-sm">{event.prize}</span>
          </div>
        )}
        
        {event.attendees && (
          <div className="flex items-center mb-4 text-gray-600">
            <div className="w-5 h-5 flex items-center justify-center mr-2">
              <Icon name="ri-group-line" />
            </div>
            <span className="text-sm">{event.attendees}</span>
          </div>
        )}
        
        <button 
          className={`w-full ${
            isPast 
              ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
              : 'bg-secondary hover:bg-secondary/90 text-primary'
          } font-bold py-2 px-4 rounded-button whitespace-nowrap transition-all`}
        >
          {event.ctaText}
        </button>
      </div>
    </div>
  );
};

export default EventCard;