// Client.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import './client.scss';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import your images
import img1 from '../../assets/img/mpcl/HPC.jpg'
import img from '../../assets/img/mpcl/HPC.jpg'
import img2 from '../../assets/img/mpcl/AI.jpg'
import img3 from '../../assets/img/mpcl/dataScience.jpg'
import img4 from '../../assets/img/mpcl/data_protection.jpg'
import img5 from '../../assets/img/mpcl/dataCenter.jpg'
import img6 from '../../assets/img/mpcl/encryption.jpg'

// Add more images as needed

const Client = () => {
    return (
        <div className="swiper-container">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} alt="Slide 1" className="swiper-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="Slide 2" className="swiper-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="Slide 3" className="swiper-image" />
                </SwiperSlide>
                {/* Add more SwiperSlides with your images as needed */}
            </Swiper>
        </div>
    );
};

export default Client;
