import React from 'react';
import MenuItem from '../../commponents/MenuItem/Menu';
import { MenuProvider } from '../../context/MenuContext';
import PropCard from '../../commponents/PropCard/PropCard';

const Menu = () => {
  return (
    <MenuProvider>
      <PropCard name={'Our Menu'} text={'Cooking delicious food since 2005'} />
      <MenuItem />
    </MenuProvider>
  );
};

export default Menu;
