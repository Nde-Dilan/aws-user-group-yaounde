import React, { useState } from 'react';
import SectionHeader from '../shared/SectionHeader';
import EventCard from './EventCard';
import EventToggle from './EventToggle';

const Events = ({ data }) => {
  const [activeTab, setActiveTab] = useState('upcoming');

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionHeader title={data.title} subtitle={data.subtitle} />
        
        <EventToggle 
          tabs={data.tabs} 
          activeTab={activeTab} 
          onChange={setActiveTab} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTab === 'upcoming' ? (
            data.upcoming.map(event => (
              <EventCard key={event.id} event={event} type="upcoming" />
            ))
          ) : (
            data.past.map(event => (
              <EventCard key={event.id} event={event} type="past" />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Events;