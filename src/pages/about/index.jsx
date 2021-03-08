import React from 'react';

import AboutMeText from './AboutMeText';
import photo from '../../images/profile_photo.png';
import '../../styles/about/Aboutme.css';

const About = () => {
    return (
        <section className="aboutme_main" id="about">
            <h1 className="aboutme_header">About me</h1>
            <section className="aboutme_section">
                <img className="aboutme_img_photo" src={photo} alt=""></img>
                <AboutMeText />
            </section>
        </section>
    );
};

export default About;
