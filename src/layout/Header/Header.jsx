import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import './header.css';
import { BiSearch } from 'react-icons/bi';
import { HiUser } from 'react-icons/hi';
import { HiShoppingCart } from 'react-icons/hi';

import { useNav } from '../../hooks/useNav';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const { showNavLinks, toggleNavLinks } = useNav();
  const navigate = useNavigate();
  return (
    <Navbar
      className=" px-lg-5 position-relative position-sticky "
      expand="md"
      sticky="top"
    >
      <Container>
        {/* Navbar brand */}
        <Navbar.Brand>
          <Link to="/home" className="text-decoration-none d-none d-md-block">
            <i className="fs-4 fw-semibold text-warning ">Feane</i>
          </Link>
          <Navbar.Toggle
            className="nav-toggle d-md-none "
            aria-controls="navbar-nav"
            onClick={toggleNavLinks}
          >
            <FaBars className="bar" />
          </Navbar.Toggle>
        </Navbar.Brand>
        {/* Brand small screen */}
        <div className="nav-link mx-auto">
          <div className="    d-md-none  align-items-center">
            <Link to="/home" className="text-decoration-none  ">
              <span className="fs-4 fw-semibold text-white ">Feane</span>
            </Link>
          </div>
        </div>
        {/* Nav icon small screen */}
        <div className=" nav-icon   d-md-none gap-4 align-items-center">
          <span>
            <HiShoppingCart
              className="text-white fs-5"
              onClick={() => navigate('/checkout')}
            />
          </span>
        </div>
        {/* nav link */}
        <Navbar.Collapse
          id="navbar-nav"
          className={`${showNavLinks ? 'show' : ''}`}
        >
          <Nav className="m-auto nav-items text-uppercase">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>

            <NavLink className="nav-link" to="/menu">
              Menu
            </NavLink>
            <NavLink className="nav-link" to="/table">
              Book a Table
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        {/* Nav icon large screen */}
        <div className=" nav-icon d-none d-md-flex gap-3 align-items-center">
          <span>
            <HiUser
              className="text-white fs-5"
              onClick={() => navigate('/signin')}
            />
          </span>
          <span>
            <HiShoppingCart
              className="text-white fs-5"
              onClick={() => navigate('/checkout')}
            />
          </span>

          <button className="btn   text-white rounded-pill text-white bg-warning fs-6 fw-semibold">
            Order Online
          </button>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
