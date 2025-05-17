import React, { useState } from 'react';

const ContactForm = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    subscribe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {data.fields.map(field => (
        <div key={field.id}>
          <label 
            htmlFor={field.id} 
            className="block text-gray-700 font-medium mb-2"
          >
            {field.label}
          </label>
          
          {field.type === 'textarea' ? (
            <textarea
              id={field.id}
              name={field.id}
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:border-secondary"
              placeholder={field.placeholder}
              value={formData[field.id] || ''}
              onChange={handleChange}
            />
          ) : (
            <input
              type={field.type}
              id={field.id}
              name={field.id}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:border-secondary"
              placeholder={field.placeholder}
              value={formData[field.id] || ''}
              onChange={handleChange}
            />
          )}
        </div>
      ))}
      
      <div className="flex items-start">
        <input 
          type="checkbox" 
          id={data.checkbox.id} 
          name={data.checkbox.id}
          className="mr-3 mt-1"
          checked={formData.subscribe}
          onChange={handleChange}
        />
        <label 
          htmlFor={data.checkbox.id} 
          className="text-gray-600"
        >
          {data.checkbox.label}
        </label>
      </div>
      
      <button 
        type="submit" 
        className="bg-secondary hover:bg-secondary/90 text-primary font-bold py-3 px-8 rounded-button whitespace-nowrap transition-all"
      >
        {data.submitText}
      </button>
    </form>
  );
};

export default ContactForm;