import React, { useState, useEffect } from 'react';
import './faq.scss';  // Ensure that this import path is correct
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'boxicons/css/boxicons.min.css';

const Faq = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    const [isExpanded, setIsExpanded] = useState([]);

    const handleToggle = (index) => {
        const newIsExpanded = [...isExpanded];
        newIsExpanded[index] = !newIsExpanded[index];
        setIsExpanded(newIsExpanded);
    };

    return (
        <section id="faq" className="faq section-bg">
            <div className="container">

                <div className="section-title">
                    <h2 data-aos="fade-right">F.A.Q</h2>
                    <p data-aos="fade-left">Innovative Solutions for High-Performance Computing and Data Science Challenges</p>
                </div>

                <div className="faq-list">
                    <ul>
                        {faqData.map((item, index) => (
                            <li key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                                <a
                                    onClick={() => handleToggle(index)}
                                    className={`collapse ${isExpanded[index] ? 'show' : ''}`}
                                > <i className="bx bx-help-circle icon-help"></i>
                                    {item.question}
                                    <i className={`bx ${isExpanded[index] ? 'bx-chevron-up' : 'bx-chevron-down'} icon-show`}></i>
                                </a>
                                <div id={`faq-list-${index}`} className={`collapse ${isExpanded[index] ? 'show' : ''}`} data-bs-parent=".faq-list">
                                    <p className='answer'>
                                        <h6>Answer</h6>
                                        {item.answer}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
};

const faqData = [
    {
        question: "Data center capabilities for reliable operations?",
        answer: "Absolutely. Our data centers are designed with advanced non-consectetur features, guaranteeing optimal performance and reliability in every aspect of operation."
    },
    {
        question: "Data center capabilities for reliable operations?",
        answer: "Absolutely. Our data centers are designed with advanced non-consectetur features, guaranteeing optimal performance and reliability in every aspect of operation."
    }, {
        question: "Data center capabilities for reliable operations?",
        answer: "Absolutely. Our data centers are designed with advanced non-consectetur features, guaranteeing optimal performance and reliability in every aspect of operation."
    }, {
        question: "Data center capabilities for reliable operations?",
        answer: "Absolutely. Our data centers are designed with advanced non-consectetur features, guaranteeing optimal performance and reliability in every aspect of operation."
    }, {
        question: "Data center capabilities for reliable operations?",
        answer: "Absolutely. Our data centers are designed with advanced non-consectetur features, guaranteeing optimal performance and reliability in every aspect of operation."
    }, {
        question: "Data center capabilities for reliable operations?",
        answer: "Absolutely. Our data centers are designed with advanced non-consectetur features, guaranteeing optimal performance and reliability in every aspect of operation."
    }, {
        question: "Data center capabilities for reliable operations?",
        answer: "Absolutely. Our data centers are designed with advanced non-consectetur features, guaranteeing optimal performance and reliability in every aspect of operation."
    }, {
        question: "Data center capabilities for reliable operations?",
        answer: "Absolutely. Our data centers are designed with advanced non-consectetur features, guaranteeing optimal performance and reliability in every aspect of operation."
    },
    // Add more FAQ items as needed
];

export default Faq;
