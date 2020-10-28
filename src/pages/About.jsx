import React from 'react';
import AboutMe from '../components/AboutMe'
import ExperienceBoard from '../components/ExperienceBoard';
import Footer from '../components/Footer';
import SkillsBoard from '../components/SkillsBoard'
import TimelineBoard from '../components/TimelineBoard';

const About = () => {
    return (
    <React.Fragment>
    <AboutMe />
    <ExperienceBoard />
    <SkillsBoard />
    <TimelineBoard />
    <Footer />
 </React.Fragment>
  
    )
}

export default About;