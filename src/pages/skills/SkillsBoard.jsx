import React from 'react';
import SkillCard from './SkillCard';
import SkillCardBottom from './SkillCardBottom';

import '../../styles/skills/SkillsBoard.css';
import skillData from '../../data/skills_data.js';

const skillsCards = skillData.map((data, index) => <SkillCard data={data} key={index} />);

const SkillsBoard = () => {
    return (
        <section className="skills_main" id="skills">
            <div className="skills_rectangle"></div>
            <div className='skills_header_wrapper'>
                <h1 className="skills_header">Technical skills</h1>
            </div>
            <div className="skills-card_container">
                {skillsCards}
                <SkillCardBottom />
            </div>
        </section>
    );
};

export default SkillsBoard;
