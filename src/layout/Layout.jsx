import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { NavProvider } from '../context/NavContext';

const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100 justify-content-between">
      <NavProvider>
        <Header />
      </NavProvider>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
