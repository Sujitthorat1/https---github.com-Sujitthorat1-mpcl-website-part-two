import React from 'react';
import './mainbody.scss';
import img1 from '../../assets/img/mpcl/artifical-intelligence-banner.jpg';
import img2 from '../../assets/img/mpcl/virtualization-banner.jpg';

const Data = [
  {
    id: 1,
    imgSrc: img1,
    serviceTitle: "HPC",
    description: `HPC Cluster deploy, 
           manage and fine-tune.We Micropoint are one of the
           leading system integrator providing solutions for HPC environment
           in India.We acquired Hinditron in the year Dec 2014,
           then the number 1 HPC player in the country to augment our skills.
           These include workstations, GPU accelerated systems, clusters of various sizes,
           Utilities and tools, services, training, and turn- key solutions`,
  },
  // {
  //   id: 2,
  //   imgSrc: img,
  //   title: "HPC",
  //   description: `HPC Cluster deploy, 
  //          manage and fine-tune.We Micropoint are one of the
  //          leading system integrator providing solutions for HPC environment
  //          in India.We acquired Hinditron in the year Dec 2014,
  //          then the number 1 HPC player in the country to augment our skills.
  //          These include workstations, GPU accelerated systems, clusters of various sizes,
  //          Utilities and tools, services, training, and turn- key solutions`,
  // }, {
  //   id: 3,
  //   imgSrc: img,
  //   title: "HPC",
  //   description: `HPC Cluster deploy, 
  //          manage and fine-tune.We Micropoint are one of the
  //          leading system integrator providing solutions for HPC environment
  //          in India.We acquired Hinditron in the year Dec 2014,
  //          then the number 1 HPC player in the country to augment our skills.
  //          These include workstations, GPU accelerated systems, clusters of various sizes,
  //          Utilities and tools, services, training, and turn- key solutions`,
  // },
  // {
  //   id: 4,
  //   imgSrc: img,
  //   title: "HPC",
  //   description: `HPC Cluster deploy, 
  //          manage and fine-tune.We Micropoint are one of the
  //          leading system integrator providing solutions for HPC environment
  //          in India.We acquired Hinditron in the year Dec 2014,
  //          then the number 1 HPC player in the country to augment our skills.
  //          These include workstations, GPU accelerated systems, clusters of various sizes,
  //          Utilities and tools, services, training, and turn- key solutions`,
  // }, {
  //   id: 5,
  //   imgSrc: img,
  //   title: "HPC",
  //   description: `HPC Cluster deploy, 
  //          manage and fine-tune.We Micropoint are one of the
  //          leading system integrator providing solutions for HPC environment
  //          in India.We acquired Hinditron in the year Dec 2014,
  //          then the number 1 HPC player in the country to augment our skills.
  //          These include workstations, GPU accelerated systems, clusters of various sizes,
  //          Utilities and tools, services, training, and turn- key solutions`,
  // }, {
  //   id: 6,
  //   imgSrc: img,
  //   title: "HPC",
  //   description: `HPC Cluster deploy, 
  //          manage and fine-tune.We Micropoint are one of the
  //          leading system integrator providing solutions for HPC environment
  //          in India.We acquired Hinditron in the year Dec 2014,
  //          then the number 1 HPC player in the country to augment our skills.
  //          These include workstations, GPU accelerated systems, clusters of various sizes,
  //          Utilities and tools, services, training, and turn- key solutions`,
  // },
];

const MainBody = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">
          Our Main Services
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({ id, imgSrc, serviceTitle, description }) => {
            return (
              <div key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={serviceTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="serviceTitle">
                    {serviceTitle}
                  </h4>
                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>


    </section>
  )
}

export default MainBody

