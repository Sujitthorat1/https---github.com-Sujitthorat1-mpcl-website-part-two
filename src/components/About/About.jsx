import React from 'react';
import TopSection from './top/AboutTop'
import AboutMidSection from './mid/AboutMidSection';
import Directors from '../../components/Directors/Directors';
const About = () => {

  return (
    <div>
      <TopSection />
      <AboutMidSection />
      <Directors />
    </div>
  );
};

export default About;
