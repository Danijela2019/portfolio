import React from 'react';
import AboutMe from '../components/AboutMe';
import ExperienceBoard from '../components/ExperienceBoard';
import Footer from '../components/Footer';
import SkillsBoard from '../components/SkillsBoard';
import Slider from '../components/Slider'
import TimelineBoard from '../components/TimelineBoard';

const Home = () => {
    return (
        <React.Fragment>
            <Slider />
            <AboutMe />
            <ExperienceBoard />
            <SkillsBoard />
            <TimelineBoard />
            <Footer />
         </React.Fragment>
        )
  
}

export default Home;