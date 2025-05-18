import React, { useState, useEffect } from "react";
import { BASE_URL, DATA as originalData } from "./index";
import WebsiteContext from "./websiteContext";

const API_URL = `${BASE_URL}/api`;

export default function DataProvider({ children }) {
  const [data, setData] = useState(originalData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to load data from API
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/data/`);

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const apiData = await response.json();
        setData(apiData);
        console.log("Data loaded successfully:", apiData);
        setError(null);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load website data. Using local fallback data.");
        // Fallback to original data if API fails
        setData(originalData);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Function to resolve image URLs
  const resolveImageUrl = (url) => {
    if (!url) return "";

    // Handle API-served images
    // Handle API-served images - FIX THE URL
    if (url.startsWith("/static/")) {
      // Use the direct static path instead of going through API
      return `https://aws-user-group-yaounde.onrender.com${url}`; // NOT ${API_URL}${url}
    }

    return url;
  };

  return (
    <WebsiteContext.Provider value={{ data, loading, error, resolveImageUrl }}>
      {children}
    </WebsiteContext.Provider>
  );
}
