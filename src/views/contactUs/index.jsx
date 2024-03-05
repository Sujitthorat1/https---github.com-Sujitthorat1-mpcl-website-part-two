import React from "react";


const ServicesHome = () => {
  return (
    <>
      {/* Banner Section  */}
      <section>
        <SubBanner heading='Contact Us' subHeading='Home /Contact Us' img={bg}/>
      </section>

      {/* Form Section  */}
      <section>
        <ContactUsForm />
      </section>

      {/* Footer Section  */}
      <section>
        <Footer />
      </section>
    </>
  );
};

export default ServicesHome;