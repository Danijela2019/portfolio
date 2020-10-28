import React from 'react';
import ExperienceBoard from '../components/ExperienceBoard'
import Footer from '../components/Footer';
import SkillsBoard from '../components/SkillsBoard'
import TimelineBoard from '../components/TimelineBoard';


const Experience = () => {
    return (
        <React.Fragment>
        <ExperienceBoard />
        <SkillsBoard />
        <TimelineBoard />
        <Footer />
     </React.Fragment>
    )
  
}

export default Experience;