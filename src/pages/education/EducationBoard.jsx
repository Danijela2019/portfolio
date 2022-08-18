import React from 'react';
import EducationCard from './EducationCard';

import '../../styles/education/EducationBoard.css';
import educationData from '../../data/education_data';

const skillsCards = educationData.map((data) => <EducationCard data={data} key={data.id} />);

const EducationBoard = () => {
    return (
        <section className="education_main" id="education">
            <h1 className="education_main_header">Education</h1>
            <section className="education_section">{skillsCards}</section>
        </section>
    );
};

export default EducationBoard;
