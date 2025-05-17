import React from "react";
import Navigation from "./components/Navigation/Navigation";
import MobileMenu from "./components/Navigation/MobileMenu";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Team from "./components/Team/Team";
import Activities from "./components/Activities/Activities";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DATA, dataLoaded } from "./data";
import { useState, useEffect } from 'react';
import "./global.css";
import DataManager from "./admin/DataManager/DataManager";
import DataProvider from "./data/DataProvider";
import { AuthProvider } from "./components/Auth/AuthProvider";
import ProtectedRoute from "./components/Protected/ProtectedRoute";
import Login from "./components/Auth/Login";

function App() {

  

  return (
    <DataProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainWebsite />} />
            <Route path="/login" element={<Login />} />
            <Route 
              path="/paulaadmin" 
              element={
                <ProtectedRoute>
                  <DataManager />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </Router>
      </AuthProvider>
    </DataProvider> 
  );
}

// Where MainWebsite would be your current website component tree
function MainWebsite() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [loadedData, setLoadedData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    // Wait for the promise to resolve
    dataLoaded
      .then(data => {
        setLoadedData(data); // Now we have the actual data
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error loading data:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading data...</div>;
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <Navigation data={loadedData.navigation} onMenuToggle={toggleMobileMenu} />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={loadedData.navigation.links}
      />
      <Hero data={loadedData.hero} />
      <About data={loadedData.about} />
      <Events data={loadedData.events} />
      <Team data={loadedData.team} />
      <Activities data={loadedData.activities} />
      <Contact data={loadedData.contact} />
      <Footer data={loadedData.footer} />
    </>
  );
}

export default App;
