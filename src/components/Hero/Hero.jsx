import React, { useEffect, useState } from 'react';
import Countdown from './Countdown';
import useWebsiteData from '../../data/useWebsiteData';
import { dataLoaded } from '../../data';

const Hero = () => {
  const { resolveImageUrl } = useWebsiteData();
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState(null);
    
  
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
  const heroData = loadedData.hero;
  
  console.log(heroData);
  
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center w-full"
      style={{
        backgroundImage: `url(${resolveImageUrl(heroData.backgroundImage)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40"></div>
      <div className="container mx-auto px-6 z-10 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {heroData.title}
          </h1>
          <p className="text-xl text-white/90 mb-8">
            {heroData.subtitle}
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            {heroData.buttons.map((button, index) => (
              <a
                key={index}
                href={button.href}
                className={`py-3 px-6 rounded-button font-bold ${
                  button.type === 'primary' 
                    ? 'bg-secondary text-primary hover:bg-secondary/90' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                } transition-all`}
              >
                {button.text}
              </a>
            ))}
          </div>
          
          <Countdown 
            targetDate={heroData.countdown.targetDate} 
            items={heroData.countdown.items}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;