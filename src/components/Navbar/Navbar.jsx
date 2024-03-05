// Navbar.js
import React, { useState } from 'react';
import './navbar.scss';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import logo from '../../assets/img/mpcl/mpcl-black-logo.png';

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
          <a href="" className="logo flex">
            <img src={logo} className="logoIcon" alt="mpcl-logo" />
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink" onClick={toggleAboutDropdown}>
                About MPCL
              </a>
              {showAboutDropdown && (
                <div className="aboutDropdown">
                  {/* Add your dropdown content here */}
                  <a href="#">Annual Return</a>
                  <a href="#">Artificial Intelligence</a>
                  <a href="#">Big Data</a>
                  <a href="#">Gallery</a>
                  {/* <a href="#">Buy authentic HP business laptop backpack</a>
                  <a href="#">Buy authentic HP laptop battery for better performance</a>
                  <a href="#">Buying authentic HP accessories for better productivity</a>
                  <a href="#">Careers</a>
                  <a href="#">Contact Us</a>
                  <a href="#">CSR Policy</a>
                  <a href="#">Data Centre</a> */}
                  <a href="#">Data Encryption and Key Management Solutions</a>
                  <a href="#">Data Protection and Disaster Management</a>
                  <a href="#">Data Science Platform</a>
                  <a href="#">Enquire Now</a>
                  <a href="#">FMS</a>
                  <a href="#">Build</a>
                  <a href="#">GPU and FPGA Solutions</a>
                  <a href="#">Introduction NVIDIA Offerings</a>
                  <a href="#">Investors </a>
                  <a href="#">Large Scale IT asset roll-out</a>
                  <a href="#">MGT-7 22-23</a>
                  <a href="#">Networking and Security Solutions</a>
                </div>
              )}
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Career
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Services
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Investors
              </a>
            </li>
            <li className="navItem">
              <button className="btn">
                <a href="">BLOG</a>
              </button>
            </li>
          </ul>

          <div onClick={closeNav} className="closeNavbar">
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
