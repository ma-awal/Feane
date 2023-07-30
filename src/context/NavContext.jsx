import { createContext, useState } from 'react';
import MenuData from '../data/MenuData';
const NavContext = createContext({});

const NavProvider = ({ children }) => {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [menu, setMenu] = useState(MenuData);
  const [search, setSearch] = useState(false);
  const [cart, showCart] = useState(false);
  const handleCloseSearch = () => {
    setSearch(false);
  };

  const handleCloseCart = () => {
    showCart(false);
  };
  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };
  const navValue = {
    menu,
    showNavLinks,
    setShowNavLinks,
    search,
    setSearch,
    cart,
    showCart,
    handleCloseSearch,
    handleCloseCart,
    toggleNavLinks,
  };

  return <NavContext.Provider value={navValue}>{children}</NavContext.Provider>;
};
export { NavContext, NavProvider };
