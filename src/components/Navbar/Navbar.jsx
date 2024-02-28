import React from 'react';
import './navbar.scss';
// import { mdOutlineTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';

const Navbar = () => {
  return (
    <section className="navBarSection">

      <header className="header flex">
        <div className="logoDev">
          <a href="" className="logo flex">
            <h1 className="icon">MPCL</h1>
          </a>


        </div>

        <div className="navBar">
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">Home</a></li>
            <li className="navItem">
              <a href="#" className="navLink">About</a></li>
            <li className="navItem">
              <a href="#" className="navLink">Career</a></li>
            <li className="navItem">
              <a href="#" className="navLink">Investors</a></li>
            <li className="navItem">
              <button className="btn">
                <a href="" >BLOG</a>
              </button>

            </li>
          </ul>

          <div className="classNavbar">
            <AiFillCloseCircle className='icon' />
          </div>
        </div>
      </header>
    </section>
  )
}

export default Navbar