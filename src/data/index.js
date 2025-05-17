// Initial empty data structure
let websiteData = {};

// Create a promise that will resolve when data is loaded
const dataLoadingPromise = fetch(
  "https://aws-user-group-yaounde.onrender.com/api/data"
)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // Update the data object when load completes
    websiteData = data;
    console.log("Website data loaded from API");
    console.log(websiteData);
    return data;
  })
  .catch((error) => {
    console.error("Failed to load initial data:", error);
    // Return empty data on error
    return {};
  });

// Export both the data and the loading promise

export const DATA = websiteData;
export const dataLoaded = dataLoadingPromise;
