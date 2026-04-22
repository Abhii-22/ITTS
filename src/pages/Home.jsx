import React from 'react';
import Carousel from '../components/Carousel';
import PartnersSection from '../components/PartnersSection';
import OurAlumnies from '../components/ouralumnies';
import Ourinstitutionalpartners from '../components/Ourinstitutionalpartners';
import Feedback from '../components/Feedback';

const Home = () => {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Arial, sans-serif' }}>
      <Carousel />
      <PartnersSection />
      <OurAlumnies />
      <Ourinstitutionalpartners />
      <Feedback />
    </div>
  );
};

export default Home;