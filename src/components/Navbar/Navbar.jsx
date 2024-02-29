import React,{useState} from 'react';
import './navbar.scss';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import logo from '../../assets/img/mpcl/mpcl-black-logo.png'
const Navbar = () => {
  const [active, setActive] = useState('navBar');

  const showNav = () => {
    setActive('navBar activeNavbar')
  }

  const closeNav = () => {
    setActive('navBar')
  }
  return (
    <section className="navBarSection">

      <header className="header flex">

        <div className="logoDev">
          <a href="" className="logo flex">
            {/* <h1 className="icon">MPCL. </h1>
             */}
            
            <img src={logo} className="logoIcon" alt="mpcl-logo" />
          </a>


        </div>

        <div className={active}>
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

          <div onClick={closeNav} className="closeNavbar">
            <AiFillCloseCircle className='icon' />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className='icon'/>
          </div>

      </header>
    </section>
  )
}

export default Navbar