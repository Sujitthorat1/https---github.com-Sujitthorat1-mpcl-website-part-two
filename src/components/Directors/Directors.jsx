// Import required libraries
import React from 'react';
// import {Pagination, } from 'swiper/modules';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Import custom styles
import './directors.scss';
import director1 from "../../assets/img/mpcl/directors/1.png"
import director2 from "../../assets/img/mpcl/directors/2.png"


// Initialize Swiper core with required modules
// SwiperCore.use([Pagination]);

const Directors = () => {
    return (
        <section id="testimonials" className="testimonials">
            <div className="container position-relative" data-aos="fade-up">
                <Swiper
                    className="testimonials-slider"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <div className="testimonial-item">
                            <img src={director1} className="testimonial-img" alt="" />
                            <h3>AMUL MAHALE</h3>
                            <h4>Co - Founder Director</h4>
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                Born and brought up in Mumbai, Mr. Mahale completed his Digital Electronic Engineering in the year 1986. With
                                32 years of sales experience under his belt, his marketing strategies proved highly valuable to MPCL. His
                                focused approach has helped MPCL cement several long-lasting profitable relationships.
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="testimonial-item">
                            <img src={director2} className="testimonial-img" alt="" />
                            <h3>CHETAN GOYANI</h3>
                            <h4>Co - Founder Director</h4>
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                As a qualified Electronics Engineer, Mr. Goyani started work as an IT engineer. Backed with over 32 years of
                                experience in the IT industry, his expertise in providing Sales & Service Solutions to large corporate across
                                India paved the way for MPCL in its nascent days. His key strengths lie in Business Development.
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Directors;
