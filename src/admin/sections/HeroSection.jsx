import React from 'react';
import TextField from '../components/TextField';
import TextArea from '../components/TextArea';
import ImageUploader from '../components/ImageUploader';
import ArrayEditor from '../components/ArrayEditor';
import SectionHeader from '../../components/shared/SectionHeader';

function HeroSection({ data, onChange }) {
  const handleChange = (field, value) => {
    onChange({
      ...data,
      [field]: value
    });
  };

  const handleButtonChange = (newButtons) => {
    handleChange('buttons', newButtons);
  };

  const renderButton = (button, onButtonChange) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <TextField
          label="Button Text"
          value={button.text || ''}
          onChange={(value) => onButtonChange({ ...button, text: value })}
          placeholder="Button text"
        />
        <TextField
          label="Button URL"
          value={button.href || ''}
          onChange={(value) => onButtonChange({ ...button, href: value })}
          placeholder="Button link"
        />
        <div className="flex flex-col">
          <label className="block text-gray-700 font-medium mb-2">Button Type</label>
          <select
            value={button.type || 'primary'}
            onChange={(e) => onButtonChange({ ...button, type: e.target.value })}
            className="px-4 py-3 border border-gray-300 rounded focus:border-secondary"
          >
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
            <option value="tertiary">Tertiary</option>
          </select>
        </div>
      </div>
    );
  };

  const handleCountdownItemChange = (newItems) => {
    handleChange('countdown', {
      ...data.countdown,
      items: newItems
    });
  };

  const renderCountdownItem = (item, onItemChange) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextField
          label="ID"
          value={item.id || ''}
          onChange={(value) => onItemChange({ ...item, id: value })}
          placeholder="Countdown item ID"
        />
        <TextField
          label="Label"
          value={item.label || ''}
          onChange={(value) => onItemChange({ ...item, label: value })}
          placeholder="Countdown item label"
        />
      </div>
    );
  };

  return (
    <div>
      <SectionHeader title="Hero Section" subtitle="Edit the main hero banner content" />
      
      <form className="space-y-8">
        <TextField
          label="Hero Title"
          id="hero-title"
          value={data.title}
          onChange={(value) => handleChange('title', value)}
          placeholder="Enter the hero title"
          required
        />
        
        <TextArea
          label="Hero Subtitle"
          id="hero-subtitle"
          value={data.subtitle}
          onChange={(value) => handleChange('subtitle', value)}
          placeholder="Enter the hero subtitle text"
        />
        
        <ImageUploader
          label="Background Image"
          id="hero-background"
          value={data.backgroundImage}
          onChange={(value) => handleChange('backgroundImage', value)}
          previewSize="large"
        />
        
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-semibold text-primary mb-4">Call-to-Action Buttons</h3>
          <ArrayEditor
            label="Action Buttons"
            items={data.buttons}
            onChange={handleButtonChange}
            renderItem={renderButton}
            addButtonText="Add Button"
          />
        </div>
        
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-semibold text-primary mb-4">Countdown Timer</h3>
          <TextField
            label="Target Date"
            id="countdown-date"
            value={data.countdown.targetDate}
            onChange={(value) => handleChange('countdown', {...data.countdown, targetDate: value})}
            placeholder="e.g., May 30, 2025 18:00:00"
          />
          
          <ArrayEditor
            label="Countdown Items"
            items={data.countdown.items}
            onChange={handleCountdownItemChange}
            renderItem={renderCountdownItem}
            addButtonText="Add Countdown Item"
          />
        </div>
      </form>
    </div>
  );
}

export default HeroSection;