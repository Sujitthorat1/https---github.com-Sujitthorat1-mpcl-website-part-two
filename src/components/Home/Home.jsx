import React, { useEffect } from 'react';
import './home.scss';
import bgVideo from '../../assets/img/mpcl/bg-img.mp4';
import img from '../../assets/img/mpcl/AI.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className="home">
            <div className="overlay"></div>

            <video src={bgVideo} muted autoPlay loop type="video/mp4"></video>

            <div className="homeContent container">
                <div className="textDiv">
                    <h1 data-aos="slide-right" className="homeTitle">
                        Whatever IT takes
                    </h1>
                    <span className="smallText">

                        <p data-aos="slide-left">
                            MPCL offers solutions for customers across many verticals. We combine state of the art IT
                            products, project roll-out skills and our infrastructure management services and thereby
                            cover entire lifecycle of your IT setup.
                        </p>

                    </span>
                    <br />
                    <button data-aos="fade-up" className="knowMoreBtn btn">
                        <a href="#">Know more</a>
                    </button>
                </div>
            </div>

            {/* Card Container */}
            {/* <div className="cardContainer">
                <div className="card">
                    <img src={img} alt="Card Image" />
                    <h2>Card Title</h2>
                </div>
            </div> */}
        </section>
    );
};

export default Home;
