import React, { useRef } from 'react';
import SectionHeader from '../shared/SectionHeader';
import TeamMember from './TeamMember';
import Icon from '../shared/Icon';

const Team = ({ data }) => {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader title={data.title} subtitle={data.subtitle} />
        
        <div className="relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <button 
              className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
              onClick={() => handleScroll('left')}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <Icon name="ri-arrow-left-s-line" className="text-primary" />
              </div>
            </button>
          </div>
          
          <div 
            ref={scrollContainerRef}
            className="team-scroll overflow-x-auto py-4 px-2"
          >
            <div className="flex gap-6 min-w-max">
              {data.members.map(member => (
                <TeamMember key={member.id} member={member} />
              ))}
            </div>
          </div>
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <button 
              className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
              onClick={() => handleScroll('right')}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <Icon name="ri-arrow-right-s-line" className="text-primary" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;