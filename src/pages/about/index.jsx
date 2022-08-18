import React from 'react';

import AboutMeText from './AboutMeText';
import '../../styles/about/Aboutme.css';

const About = () => {
    return (
        <section className="aboutme_main" id="about">
            <div>
                <div className="aboutme_text">
                <AboutMeText />
                </div>
            </div>
        </section>
    );
};

export default About;
