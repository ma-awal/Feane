import React from 'react';
import PropCard from '../../commponents/PropCard/PropCard';
import AboutData from '../../data/AboutData';
import AboutChoose from '../../commponents/AboutChoose/AboutChoose';
import AboutClient from '../../commponents/AboutClinet/AboutClient';
import ClientData from '../../data/ClientData';
import AboutStuff from '../../commponents/AboutStuff/AboutStaff';
import AboutStaffData from '../../data/AboutStaff';
import img from '../../assets/hero_general.jpg';
const About = () => {
  return (
    <main>
      <PropCard
        name={'About Us'}
        text={'Cooking delicious food since 2005'}
        img={img}
      />
      <AboutChoose data={AboutData} />
      <AboutClient data={ClientData} />
      <AboutStuff data={AboutStaffData} />
    </main>
  );
};

export default About;
