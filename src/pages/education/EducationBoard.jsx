import React from 'react';
import EducationCard from './EducationCard';

import '../../styles/education/EducationBoard.css';
import educationData from '../../data/education_data';

const skillsCards = educationData.map((data) => <EducationCard data={data} key={data.id} />);

const EducationBoard = () => {
    return (
        <section className="experience_main" id="education">
            <h1 className="experience_main_header">Education</h1>
            <section className="experience_section">{skillsCards}</section>
        </section>
    );
};

export default EducationBoard;
