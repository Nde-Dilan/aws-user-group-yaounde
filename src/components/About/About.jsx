import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import Icon from '../shared/Icon';

const About = ({ data }) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader title={data.title} subtitle={data.subtitle} />
        
        <div className="bg-gray-50 rounded-lg p-8 mb-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-primary mb-4">{data.mission.title}</h3>
          <p className="text-gray-700 leading-relaxed">{data.mission.description}</p>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">{data.coreValues.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.coreValues.values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 flex items-center justify-center bg-secondary/10 rounded-full mb-4 mx-auto">
                  <Icon name={value.icon} size="2x" className="text-secondary" />
                </div>
                <h4 className="text-xl font-semibold text-primary mb-2 text-center">{value.title}</h4>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">{data.benefits.title}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.benefits.items.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-5 border border-gray-100 hover:border-secondary/30 transition-all">
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  <Icon name={item.icon} size="2x" className="text-secondary" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;