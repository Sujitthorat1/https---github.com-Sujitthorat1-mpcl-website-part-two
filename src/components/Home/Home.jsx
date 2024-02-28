import React from 'react';
import './home.scss';
import bgVideo from '../../assets/img/mpcl/bg-img.mp4';

const Home = () => {
    return (
        <section className="home">
            <div className="overlay"></div>

            <video src={bgVideo} muted autoPlay loop type="video/mp4"></video>

            <div className="homeContent container">
                <div className="textDiv">

                    <h1 className="homeTitle">Whatever IT takes</h1>
                    <span className="smallText">MPCL offers solutions for customers
                        across many verticals. We combine state of the art IT products,
                        project roll-out skills and our infrastructure management services
                        and thereby cover entire lifecycle of your IT setup.</span>
                    <br/>
                    <button className="knowMoreBtn btn">
                        <a href="#">Know more</a>
                    </button>

                </div>
            </div>
        </section>
    );
};
export default Home;