import React from 'react';
import PropCard from '../../commponents/PropCard/PropCard';
import AboutData from '../../data/AboutData';
import AboutChoose from '../../commponents/AboutChoose/AboutChoose';

import ClientData from '../../data/ClientData';
import AboutStuff from '../../commponents/AboutStuff/AboutStaff';
import AboutStaffData from '../../data/AboutStaff';
import img from '../../assets/hero_general.jpg';
import AboutFean from '../../commponents/AboutFean/AboutFean';

const About = () => {
  return (
    <main>
      <PropCard
        name={'About Us'}
        text={'Cooking delicious food since 2005'}
        img={img}
      />

      <AboutChoose data={AboutData} />
      <AboutFean />
      <AboutStuff data={AboutStaffData} />
    </main>
  );
};

export default About;
