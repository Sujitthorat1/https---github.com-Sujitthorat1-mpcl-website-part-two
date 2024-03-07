// JSX Code
import React from 'react';
import './Career.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../../assets/img/mpcl/auth_reg_img.jpg'
const Career = () => {
    return (
        <section id="about" className="about section-bg" style={{ backgroundColor: 'rgb(222, 255, 255)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative" data-aos="fade-right">
                        <img src={img} alt="" />
                    </div>
                    <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                        <h4 data-aos="fade-up">Career</h4>
                        <h3 data-aos="fade-up">Micropoint Computers Pvt. Ltd. (MPCL)</h3>
                        <p data-aos="fade-up">Micropoint Computers Pvt. Ltd. (MPCL) is one of India’s leading IT Infrastructure Solutions and Services Company. We are an ISO 9001:2015 certified with more than 3 decades of presence. We are a team of 700+ skilled personnel. The management team carries a combined average technical experience of 20+ years.</p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Career;
