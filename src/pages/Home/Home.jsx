import React from 'react';
import './Home.css';
import HomeBanner from '../../commponents/HomeBanner/HomeBanner';
import HomeAbout from '../../commponents/HomeAbout/HomeAbout';
import Menu from '../Menu/Menu';
import HomeParty from '../../commponents/HomeParty/HomeParty';
const Home = () => {
  return (
    <main>
      <HomeBanner />
      {/* <HomeAbout /> */}
      <Menu />
      <HomeParty />
    </main>
  );
};

export default Home;
