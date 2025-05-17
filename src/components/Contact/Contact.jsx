import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = ({ data }) => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader title={data.title} subtitle={data.subtitle} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <ContactForm data={data.form} />
          </div>
          
          <div className="lg:pl-8">
            <ContactInfo data={data.info} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;