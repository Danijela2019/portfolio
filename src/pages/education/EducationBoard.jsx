import React from 'react';
import EducationCard from './EducationCard';

import '../../styles/education/EducationBoard.css';
import educationData from '../../data/education_data';

const skillsCards = educationData.map((data) => <EducationCard data={data} key={data.id} />);

const EducationBoard = () => {
    return (
        <section className="education_main" id="education">
            <div className="education_header_container">
                <h1 className="education_header">Education</h1>
                <div className="education_color_rectangle"></div>
            </div>
            <div className="education_card_container">
                <div className="education_color_big_rectangle"></div>
                <div className="education_card">
                    <div className="education_section">{skillsCards}</div>
                </div>
            </div>
        </section>
    );
};

export default EducationBoard;
