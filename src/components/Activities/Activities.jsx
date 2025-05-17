import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import ActivityCard from './ActivityCard';
import CommunityImpact from './CommunityImpact';
import UpcomingActivities from './UpcomingActivities';
import Icon from '../shared/Icon';

const Activities = ({ data }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionHeader title={data.title} subtitle={data.subtitle} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.categories.map(category => (
            <ActivityCard key={category.id} activity={category} />
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <CommunityImpact data={data.communityImpact} />
          </div>
          
          <div>
            <UpcomingActivities data={data.upcomingActivities} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;