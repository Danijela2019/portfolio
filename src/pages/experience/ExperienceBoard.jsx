import React from 'react';
import ExperienceCard from './ExperienceCard';

import '../../styles/experience/ExperienceBoard.css';
import experienceData from '../../data/experience_data';

const skillsCards = experienceData.map((data) => <ExperienceCard data={data} key={data.id} />);

const ExperienceBoard = () => {
    return (
        <section className="experience_main" id="experience">
            <h1 className="experience_main_header">Experience</h1>
            <section className="experience_section">{skillsCards}</section>
        </section>
    );
};

export default ExperienceBoard;
