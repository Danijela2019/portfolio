import React from 'react';

import AboutMeText from './AboutMeText';
import '../../styles/about/Aboutme.css';

const About = () => {
    return (
        <section className="aboutme_main" id="about">
            <h1 className="aboutme_header">About me</h1>
            <section className="aboutme_section">
                <div className="aboutme_text">
                <AboutMeText />
                </div>
            </section>
        </section>
    );
};

export default About;
