import React from 'react';
import '../../styles/skills/SkillCard.css';

const SkillCard = ({ data }) => {
    return (
        <section className="skill-card_main">
            <div className="skill-card_logos">
                <img className="skill-card_logo_img" src={data.logo1} alt={data.alternative1}></img>
                <img className="skill-card_logo_img" src={data.logo2} alt={data.alternative2}></img>
                <img className="skill-card_logo_img" src={data.logo3} alt={data.alternative3}></img>
            </div>
            <a className="skill-card_link" href={data.link}>
                <button className="skill-card_button">Some Example code</button>
            </a>
        </section>
    );
};

export default SkillCard;
