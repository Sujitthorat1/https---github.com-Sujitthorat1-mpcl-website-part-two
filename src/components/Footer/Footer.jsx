import React from 'react';
import './footer.scss';
import video from '../../assets/img/mpcl/bg-vid.mp4';
import { FiChevronRight, FiSend } from 'react-icons/fi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'



const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} muted autoPlay loop type='video/mp4'></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Stay Connected With us</h2>
          </div>


          <div className="inputDiv flex">
            <input type="text" placeholder='Enter Email Address' />
            <button className="btn flex" type='submit'>
              SEND <FiSend className='icon'/>
            </button>
          </div>
        </div>

        <div className="footerCard fle">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                MPCL .
              </a>
            </div>
            <div className="footerParagraph">
              Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Assumenda quam nostrum
              blanditiis quaerat. Dolorum repellat iste
              sed facere culpa aliquid aut adipisci,
              aperiam explicabo.
            </div>

            <div className='footerSocials'>
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            <div className="linkGroup">
              <span className="groupTitle">
                OUR COMPANY
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Services
              </li>
              
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Data center
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Def
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Network
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                HPC
              </li>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Footer
