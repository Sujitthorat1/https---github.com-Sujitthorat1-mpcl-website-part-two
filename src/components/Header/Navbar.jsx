// Navbar.js
import React, { useState } from 'react';
import './navbar.scss';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import logo from '../../assets/img/mpcl/mpcl-black-logo.png';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  const [active, setActive] = useState('navBar');
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);

  const showNav = () => {
    setActive('navBar activeNavbar');
  };

  const closeNav = () => {
    setActive('navBar');
    setShowAboutDropdown(false); // Close dropdown when closing the navbar
  };

  const toggleAboutDropdown = () => {
    setShowAboutDropdown((prev) => !prev);
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDev">
          <Link Link="/" className="logo flex">
            <img src={logo} className="logoIcon" alt="mpcl-logo" />
          </Link>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link to="/" className={`navLink`}>
                Home
              </Link>
            </li>
            <li className="navItem">
              <Link to="/" className="navLink " onClick={toggleAboutDropdown}>
                About MPCL
              </Link>
              {showAboutDropdown && (
                <div className="aboutDropdown">
                  {/* Add your dropdown content here */}
                  <NavLink to="/aboutMpcl/about">About</NavLink>
                  <NavLink to="/aboutMpcl/gallery">Gallery</NavLink>

                  <Link href="#">Annual Return</Link>
                  <Link href="#">Artificial Intelligence</Link>
                  <Link href="#">Big Data</Link>
                  <Link href="#">Gallery</Link>
                  {/* <a href="#">Buy authentic HP business laptop backpack</a>
                  <a href="#">Buy authentic HP laptop battery for better performance</a>
                  <a href="#">Buying authentic HP accessories for better productivity</a>
                  <a href="#">Careers</a>
                  <a href="#">Contact Us</a>
                  <a href="#">CSR Policy</a>
                  <a href="#">Data Centre</a> */}
                  <Link href="#">Data Encryption and Key Management Solutions</Link>
                  <Link href="#">Data Protection and Disaster Management</Link>
                  <Link href="#">Data Science Platform</Link>
                  <Link href="#">Enquire Now</Link>
                  <Link href="#">FMS</Link>
                  <Link href="#">Build</Link>
                  <Link href="#">GPU and FPGA Solutions</Link>
                  <Link href="#">Introduction NVIDIA Offerings</Link>
                  <Link href="#">Investors </Link>
                  <Link href="#">Large Scale IT asset roll-out</Link>
                  <Link href="#">MGT-7 22-23</Link>
                  <Link href="#">Networking and Security Solutions</Link>
                </div>
              )}
            </li>
            <li className="navItem">
              <NavLink to="/career" className="navLink">
                Career
              </NavLink>
            </li>
            <li className="navItem">
              <Link to="/services" className="navLink">
                Services
              </Link>
            </li>
            <li className="navItem">
              <Link href="#" className="navLink">
                Contact US
              </Link>
            </li>
            <li className="navItem">
              <button className="btn">
                <Link href="/blog" className='navLink'>BLOG</Link>
              </button>
            </li>
          </ul>

          <div onClick={closeNav} className="closeNavbar ">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
