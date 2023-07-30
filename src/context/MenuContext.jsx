import { createContext, useState } from 'react';
import MenuData from '../data/MenuData';
const MenuContext = createContext();
const allCategories = [
  'All Projects',
  ...new Set(MenuData.map((item) => item.category)),
];
const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState(MenuData);
  const [categories, setCategories] = useState(allCategories);
  const filteredItems = (category) => {
    if (category === 'All Projects') {
      setMenu(MenuData);
      return;
    }
    const newItems = MenuData.filter((item) => item.category === category);
    setMenu([...newItems]);
  };

  const menuValue = {
    menu,
    setMenu,
    categories,
    setCategories,
    filteredItems,
  };
  return (
    <MenuContext.Provider value={menuValue}>{children}</MenuContext.Provider>
  );
};

export { MenuContext, MenuProvider };
