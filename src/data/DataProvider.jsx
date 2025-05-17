import React, { createContext, useContext, useState, useEffect } from 'react';
import { DATA as originalData } from './index';

// Create Context
const DataContext = createContext();

export const useWebsiteData = () => useContext(DataContext);

export function DataProvider({ children }) {
  const [data, setData] = useState(originalData);
  
  useEffect(() => {
    // Function to load data from localStorage
    const loadData = () => {
      const savedData = localStorage.getItem('awsUserGroupData');
      if (savedData) {
        try {
          const parsedData = JSON.parse(savedData);
          setData(parsedData);
        } catch (e) {
          console.error('Error loading saved data:', e);
        }
      }
    };
    
    // Load data on mount
    loadData();
    
    // Listen for storage events (from other tabs) or custom events
    window.addEventListener('storage', loadData);
    window.addEventListener('data-updated', loadData);
    
    return () => {
      window.removeEventListener('storage', loadData);
      window.removeEventListener('data-updated', loadData);
    };
  }, []);
  
  // Function to resolve image URLs (handle local: prefix)
  const resolveImageUrl = (url) => {
    if (!url) return '';
    
    if (typeof url === 'string' && url.startsWith('local:')) {
      const fileName = url.replace('local:', '');
      const storedImage = localStorage.getItem(`image_${fileName}`);
      
      if (storedImage) {
        try {
          const imageData = JSON.parse(storedImage);
          return imageData.dataUrl;
        } catch (e) {
          console.error('Failed to parse stored image data:', e);
          return '';
        }
      }
      return '';
    }
    
    return url;
  };
  
  return (
    <DataContext.Provider value={{ data, resolveImageUrl }}>
      {children}
    </DataContext.Provider>
  );
}