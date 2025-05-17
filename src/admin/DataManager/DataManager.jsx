import React, { useState } from "react";
import GeneralSection from "../sections/GeneralSection";
import NavigationSection from "../sections/NavigationSection";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import EventsSection from "../sections/EventsSection";
import TeamSection from "../sections/TeamSection";
import ActivitiesSection from "../sections/ActivitiesSection";
import ContactSection from "../sections/ContactSection";
import FooterSection from "../sections/FooterSection";
import { DATA as originalData } from "../../data";
import SectionNav from "../components/SectionNav";
import Icon from "../../components/shared/Icon";

import { downloadAsIndexJs } from "../../utils/exportHelper";
import ImportData from "../../ImportData";
import { useAuth } from "../../components/Auth/useAuth";

function DataManager() {
  // Load data from localStorage if available, otherwise use the original data
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("awsUserGroupData");
    if (savedData) {
      try {
        return JSON.parse(savedData);
      } catch (e) {
        console.error("Error parsing saved data:", e);
        return originalData;
      }
    }
    return originalData;
  });

  const [activeSection, setActiveSection] = useState("general");
  const [hasChanges, setHasChanges] = useState(false);
  const [lastSaved, setLastSaved] = useState(null);

  const handleDataChange = (sectionKey, newSectionData) => {
    setData((prevData) => ({
      ...prevData,
      [sectionKey]: newSectionData,
    }));
    setHasChanges(true);
  };

  const handleSave = async () => {
    try {
      // Save to API
      const response = await fetch(
        "https://aws-user-group-yaounde.onrender.com/api/data/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const result = await response.json();

      if (result && !result.success && result.message) {
        throw new Error(result.message);
      }

      // Update last saved timestamp
      const now = new Date();
      setLastSaved(now.toLocaleTimeString());
      setHasChanges(false);

      // Also save to localStorage as backup
      localStorage.setItem("awsUserGroupData", JSON.stringify(data));

      alert("Data saved successfully! Your changes are now permanent.");
    } catch (error) {
      console.error("Error saving data:", error);
      alert(`Error saving data: ${error.message}`);
    }
  };

  const handleReset = () => {
    if (
      window.confirm(
        "Are you sure you want to reset to the original data? All your changes will be lost."
      )
    ) {
      localStorage.removeItem("awsUserGroupData");
      setData(originalData);
      setHasChanges(false);
      setLastSaved(null);

      // Force the website to refresh data
      window.dispatchEvent(new Event("storage"));

      alert("Data has been reset to the original values.");
    }
  };

  const handleExport = () => {
    // Create a downloadable JSON file
    const dataStr = JSON.stringify(data, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(
      dataStr
    )}`;

    const exportFileDefaultName = `aws-user-group-data-${new Date()
      .toISOString()
      .slice(0, 10)}.json`;

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  };

  const sections = [
    {
      id: "general",
      label: "General Settings",
      component: (
        <GeneralSection
          data={data.meta}
          onChange={(newData) => handleDataChange("meta", newData)}
        />
      ),
    },
    {
      id: "navigation",
      label: "Navigation",
      component: (
        <NavigationSection
          data={data.navigation}
          onChange={(newData) => handleDataChange("navigation", newData)}
        />
      ),
    },
    {
      id: "hero",
      label: "Hero Section",
      component: (
        <HeroSection
          data={data.hero}
          onChange={(newData) => handleDataChange("hero", newData)}
        />
      ),
    },
    {
      id: "about",
      label: "About Section",
      component: (
        <AboutSection
          data={data.about}
          onChange={(newData) => handleDataChange("about", newData)}
        />
      ),
    },
    {
      id: "events",
      label: "Events Section",
      component: (
        <EventsSection
          data={data.events}
          onChange={(newData) => handleDataChange("events", newData)}
        />
      ),
    },
    {
      id: "team",
      label: "Team Section",
      component: (
        <TeamSection
          data={data.team}
          onChange={(newData) => handleDataChange("team", newData)}
        />
      ),
    },
    {
      id: "activities",
      label: "Activities",
      component: (
        <ActivitiesSection
          data={data.activities}
          onChange={(newData) => handleDataChange("activities", newData)}
        />
      ),
    },
    {
      id: "contact",
      label: "Contact Section",
      component: (
        <ContactSection
          data={data.contact}
          onChange={(newData) => handleDataChange("contact", newData)}
        />
      ),
    },
    {
      id: "footer",
      label: "Footer",
      component: (
        <FooterSection
          data={data.footer}
          onChange={(newData) => handleDataChange("footer", newData)}
        />
      ),
    },
  ];

  const activeComponent = sections.find(
    (section) => section.id === activeSection
  )?.component;

  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary text-white py-4 px-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">
            AWS User Group Yaoundé - Data Manager
          </h1>
          <div className="flex items-center space-x-4">
            {lastSaved && (
              <span className="text-xs text-gray-300">
                Last saved: {lastSaved}
              </span>
            )}
            <button
              onClick={handleSave}
              disabled={!hasChanges}
              className={`px-4 py-2 rounded-button ${
                hasChanges
                  ? "bg-secondary text-primary hover:bg-secondary/90"
                  : "bg-gray-500 text-white cursor-not-allowed"
              } font-bold transition-colors`}
            >
              Save Changes
            </button>
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-button font-bold transition-colors"
            >
              Reset Data
            </button>

            <ImportData
              onImport={(importedData) => {
                if (
                  window.confirm(
                    "Are you sure you want to import this data? This will replace your current settings."
                  )
                ) {
                  setData(importedData);
                  setHasChanges(true);
                }
              }}
            />
            <button
              onClick={handleExport}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-button font-bold transition-colors"
            >
              Export JSON
            </button>
            {/* <button
              onClick={() => downloadAsIndexJs(data)}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-button font-bold transition-colors"
            >
              Export as index.js
            </button> */}

            <button
              onClick={logout}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-button font-bold transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <SectionNav
              sections={sections}
              activeSection={activeSection}
              onSectionChange={setActiveSection}
            />
          </aside>

          <main className="lg:col-span-3 bg-white rounded-lg shadow-md p-6">
            {activeComponent}
          </main>
        </div>
      </div>
    </div>
  );
}

export default DataManager;
