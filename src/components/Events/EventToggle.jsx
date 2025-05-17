import React from 'react';

const EventToggle = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="event-toggle flex justify-center mb-10">
      <div className="bg-white rounded-full p-1 inline-flex shadow-sm">
        {tabs.map(tab => (
          <React.Fragment key={tab.id}>
            <input 
              type="radio" 
              name="event-type" 
              id={tab.id} 
              checked={activeTab === tab.id}
              onChange={() => onChange(tab.id)}
            />
            <label 
              htmlFor={tab.id} 
              className="font-medium text-sm"
            >
              {tab.label}
            </label>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default EventToggle;