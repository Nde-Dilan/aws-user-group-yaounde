import React, { useState } from 'react';
import TextField from '../components/TextField';
import TextArea from '../components/TextArea';
import ImageUploader from '../components/ImageUploader';
import ArrayEditor from '../components/ArrayEditor';
import SectionHeader from '../../components/shared/SectionHeader';

function EventsSection({ data, onChange }) {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  const handleChange = (field, value) => {
    onChange({
      ...data,
      [field]: value
    });
  };

  const handleTabsChange = (newTabs) => {
    handleChange('tabs', newTabs);
  };

  const handleEventsChange = (type, newEvents) => {
    handleChange(type, newEvents);
  };

  const renderTab = (tab, onTabChange) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextField
          label="Tab ID"
          value={tab.id || ''}
          onChange={(value) => onTabChange({ ...tab, id: value })}
          placeholder="Unique tab identifier"
        />
        <TextField
          label="Tab Label"
          value={tab.label || ''}
          onChange={(value) => onTabChange({ ...tab, label: value })}
          placeholder="Tab display text"
        />
      </div>
    );
  };

  const renderEvent = (event, onEventChange) => {
    return (
      <div className="space-y-4">
        <TextField
          label="Event Title"
          value={event.title || ''}
          onChange={(value) => onEventChange({ ...event, title: value })}
          placeholder="Event title"
          required
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextField
            label="Event Date"
            value={event.date || ''}
            onChange={(value) => onEventChange({ ...event, date: value })}
            placeholder="e.g., May 30, 2025"
          />
          
          {activeTab === 'upcoming' && (
            <TextField
              label="Event Time"
              value={event.time || ''}
              onChange={(value) => onEventChange({ ...event, time: value })}
              placeholder="e.g., 6:00 PM - 8:30 PM"
            />
          )}
        </div>
        
        <TextField
          label="Location"
          value={event.location || ''}
          onChange={(value) => onEventChange({ ...event, location: value })}
          placeholder="Event location"
        />
        
        {activeTab === 'upcoming' && (
          <TextField
            label="Speaker"
            value={event.speaker || ''}
            onChange={(value) => onEventChange({ ...event, speaker: value })}
            placeholder="Event speaker"
          />
        )}
        
        {activeTab === 'upcoming' && event.prize && (
          <TextField
            label="Prize Info"
            value={event.prize || ''}
            onChange={(value) => onEventChange({ ...event, prize: value })}
            placeholder="Prize information"
          />
        )}
        
        {activeTab === 'past' && event.attendees && (
          <TextField
            label="Attendees"
            value={event.attendees || ''}
            onChange={(value) => onEventChange({ ...event, attendees: value })}
            placeholder="Number of attendees"
          />
        )}
        
        <ImageUploader
          label="Event Image"
          value={event.image || ''}
          onChange={(value) => onEventChange({ ...event, image: value })}
          previewSize="medium"
        />
        
        <TextField
          label="CTA Text"
          value={event.ctaText || ''}
          onChange={(value) => onEventChange({ ...event, ctaText: value })}
          placeholder="Call-to-action button text"
        />
      </div>
    );
  };

  return (
    <div>
      <SectionHeader title="Events Section" subtitle="Manage upcoming and past events" />
      
      <form className="space-y-8">
        <TextField
          label="Section Title"
          id="events-title"
          value={data.title || ''}
          onChange={(value) => handleChange('title', value)}
          placeholder="Enter section title"
        />
        
        <TextArea
          label="Section Subtitle"
          id="events-subtitle"
          value={data.subtitle || ''}
          onChange={(value) => handleChange('subtitle', value)}
          placeholder="Enter section subtitle"
        />
        
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-semibold text-primary mb-4">Event Tabs</h3>
          <ArrayEditor
            items={data.tabs || []}
            onChange={handleTabsChange}
            renderItem={renderTab}
            addButtonText="Add Tab"
          />
        </div>
        
        <div className="border-t border-gray-200 pt-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-primary">Event Listings</h3>
            <div className="inline-flex rounded-md shadow-sm">
              <button
                type="button"
                onClick={() => setActiveTab('upcoming')}
                className={`px-4 py-2 text-sm font-medium rounded-l-md ${
                  activeTab === 'upcoming' 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } border border-gray-300`}
              >
                Upcoming Events
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('past')}
                className={`px-4 py-2 text-sm font-medium rounded-r-md ${
                  activeTab === 'past' 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } border border-gray-300 border-l-0`}
              >
                Past Events
              </button>
            </div>
          </div>
          
          {activeTab === 'upcoming' ? (
            <ArrayEditor
              label="Upcoming Events"
              items={data.upcoming || []}
              onChange={(events) => handleEventsChange('upcoming', events)}
              renderItem={renderEvent}
              addButtonText="Add Upcoming Event"
            />
          ) : (
            <ArrayEditor
              label="Past Events"
              items={data.past || []}
              onChange={(events) => handleEventsChange('past', events)}
              renderItem={renderEvent}
              addButtonText="Add Past Event"
            />
          )}
        </div>
      </form>
    </div>
  );
}

export default EventsSection;