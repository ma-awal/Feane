import React from 'react';
import MenuItem from '../../commponents/MenuItem/Menu';
import { MenuProvider } from '../../context/MenuContext';

const Menu = () => {
  return (
    <MenuProvider>
      <MenuItem />
    </MenuProvider>
  );
};

export default Menu;
