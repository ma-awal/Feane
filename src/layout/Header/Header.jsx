import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import './header.css';
import logo from '../../assets/logo.svg';
import { BiSearch } from 'react-icons/bi';
import { BsBagDashFill } from 'react-icons/bs';
import UserSearch from '../../commponents/UserSearch/UserSearch';
import CartItems from '../../commponents/CartItems/CartItems';
import { useNav } from '../../hooks/useNav';
const Header = () => {
  const { showNavLinks, toggleNavLinks, setSearch, search, cart, showCart } =
    useNav();

  return (
    <Navbar
      className=" px-lg-5    position-relative position-sticky "
      expand="md"
      sticky="top"
    >
      <Container fluid>
        <Navbar.Brand>
          <Link to="/home">
            <img src={logo} alt="logo" className="img-fluid" />
          </Link>
        </Navbar.Brand>
        <div className="nav-link d-flex  gap-2  d-md-none  align-items-center">
          <NavLink className="nav-link" onClick={() => setSearch(true)}>
            <span>
              <BiSearch className="fs-6" />
            </span>
          </NavLink>
          <NavLink className="nav-link" onClick={() => showCart(true)}>
            <span>
              <BsBagDashFill className="fs-6" />
            </span>
          </NavLink>
        </div>
        <Navbar.Toggle
          className="nav-toggle"
          aria-controls="navbar-nav"
          onClick={toggleNavLinks}
        >
          <FaBars className="bar" />
        </Navbar.Toggle>

        <Navbar.Collapse
          id="navbar-nav"
          className={`${showNavLinks ? 'show' : ''}`}
        >
          <Nav className="m-auto nav-items">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" to="/shop">
              Shop
            </NavLink>
            {/* <NavDropdown
              title="Pages"
              id="basic-nav-dropdown"
              className="custom-dropdown rounded-0 p-0 m-0  "
            >
              <Link className="dropItem" to="/department">
                Department
              </Link>

              <Link className="dropItem" to="/teacher">
                Teacher
              </Link>
              <Link className="dropItem" to="/student">
                Student
              </Link>
              <Link className="dropItem" to="/result">
                Result
              </Link>
              <Link className="dropItem" to="/Notice">
                Notice
              </Link>
              <Link className="dropItem" to="/event">
                Event
              </Link>
              <Link className="dropItem" to="/gallery">
                Gallery
              </Link>
            </NavDropdown> */}

            <NavLink className="nav-link" to="/blog">
              Blog
            </NavLink>

            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <div className="nav-link d-none d-md-flex gap-2 align-items-center">
          <NavLink className="nav-link" onClick={() => setSearch(true)}>
            <span>
              <BiSearch className="fs-6" />
            </span>
          </NavLink>
          <NavLink className="nav-link" onClick={() => showCart(true)}>
            <span>
              <BsBagDashFill className="fs-6" />
            </span>
          </NavLink>
        </div>
      </Container>

      {search && <UserSearch />}
      {cart && <CartItems />}
    </Navbar>
  );
};

export default Header;
