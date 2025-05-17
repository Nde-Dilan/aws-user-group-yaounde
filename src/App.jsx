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
import { DATA } from "./data";
import "./global.css";
import DataManager from "./admin/DataManager/DataManager";
import { DataProvider } from "./data/DataProvider";

function App() {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainWebsite />} />
          <Route path="/admin" element={<DataManager />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

// Where MainWebsite would be your current website component tree
function MainWebsite() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <Navigation data={DATA.navigation} onMenuToggle={toggleMobileMenu} />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={DATA.navigation.links}
      />
      <Hero data={DATA.hero} />
      <About data={DATA.about} />
      <Events data={DATA.events} />
      <Team data={DATA.team} />
      <Activities data={DATA.activities} />
      <Contact data={DATA.contact} />
      <Footer data={DATA.footer} />
    </>
  );
}

export default App;
