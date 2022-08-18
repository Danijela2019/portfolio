import React from 'react';

import '../../styles/education/EducationCard.css';

const EducationCard = ({ data }) => {
    return (
        <div className="experience_card">
            <div className="experience_card_top_container">
                <img src={data.logo} alt={data.alternative}></img>
                <h1 className="experience_header">{data.title}</h1>
                <span className="experinece_duration">{data.duration}</span>
            </div>
            <h2 className="experience_subtitle">{data.subtitle}</h2>
            <p className="experience_text">{data.description}</p>
        </div>
    );
};

export default EducationCard;
