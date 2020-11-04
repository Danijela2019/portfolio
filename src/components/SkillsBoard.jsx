import React from 'react'
import SkillCard from './SkillCard'
import SkillCardBottom from './SkillCardBottom'

import '../styles/SkillsBoard.css'
import skillData from '../data/skills_data.js';



const skillsCards =  skillData.map((data,index) => (
             <SkillCard data={data} key={index} />
         ))

const SkillsBoard = () => {
    return (
        <main className="skills_main" id="skills">
            <h1 className="skills_header">Skill set</h1>
            <section className="skills-card_container">
                {skillsCards}
                <SkillCardBottom />
            </section>
        </main>
    )
}

export default SkillsBoard;