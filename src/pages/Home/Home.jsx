import React from 'react';
import './Home.css';
import ClientData from '../../data/ClientData';
import HomeBanner from '../../commponents/HomeBanner/HomeBanner';
import Menu from '../Menu/Menu';

import Advertise from '../../commponents/Advertise/Advertise';
import AboutFean from '../../commponents/AboutFean/AboutFean';
import HomeClient from '../../commponents/HomeClient/HomeClient';
import HomeOrder from '../../commponents/HomeOrder/HomeOrder';
import MenuItem from '../../commponents/MenuItem/Menu';
import { MenuProvider } from '../../context/MenuContext';
const Home = () => {
  return (
    <main>
      <HomeBanner />
      <Advertise />
      <MenuProvider>
        <MenuItem />
      </MenuProvider>

      <AboutFean />
      <HomeOrder />
      <HomeClient data={ClientData} />
    </main>
  );
};

export default Home;
