import React from 'react';
import Carousel from '../components/Carousel';
import StatsSection from '../components/StatsSection';
import FeaturesSection from '../components/FeaturesSection';
import CoursesSection from '../components/CoursesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import LearningPathSection from '../components/LearningPathSection';
import TechnologiesSection from '../components/TechnologiesSection';
import FAQSection from '../components/FAQSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Carousel />
      <StatsSection />
      <FeaturesSection />
      <CoursesSection />
      <TestimonialsSection />
      <CTASection />
      <LearningPathSection />
      <TechnologiesSection />
      <FAQSection />
    </div>
  );
};

export default Home;