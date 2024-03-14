import React from 'react'
import ContactUs from '../../components/ContactUs/ContactUs'
import SubBanner from '../../components/SubBanner/SubBanner'
import bg from '../../assets/img/mpcl/data_protection.jpg'
const contactUs = () => {
    return (
        <>
            <SubBanner heading='Contact Us' subHeading='Home/Contact Us' img={bg} />
            <ContactUs />
        </>
    )
}

export default contactUs
