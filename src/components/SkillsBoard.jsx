import React from 'react'
import '../styles/SkillsBoard.css'
import {git, postgres, mongoDB, reactBootstrap, sass, styledComponents, reactRouter}  from '../images'
import SkillCard from './SkillCard'
import skillData from '../skills_data.js';

const SkillCardBottom = () => {
    return (
        <main className="skill-card_bottom">
        <h1 className="skill-card_bottom_header">Other skills </h1>
        <section className="skill-card_bottom_logos">
            <img  className="skill-card_logo_img" src={git} alt="Git logo"></img>
            <img className="skill-card_logo_img" src={postgres} alt=">PostreSQL logo"></img>
            <img  className="skill-card_logo_img" src={mongoDB} alt="MongoDB logo"></img>
            <img className="skill-card_logo_img" src={reactBootstrap} alt="React bootstrap logo"></img>
            <img  className="skill-card_logo_img" src={sass} alt="Sass logo"></img>
            <img className="skill-card_logo_img" src={styledComponents} alt=">Styled componenets logo"></img>
            <img className="skill-card_logo_img" src={reactRouter} alt=">React router logo"></img>
        </section>
    </main>
    )
}

const skillsCards =  skillData.map((data,index) => (
             <SkillCard
             data={data} key={index} />
         ))
     


const SkillsBoard =()=> {
    return (
        <main className="skills_main">
            <h1 className="skills_header">Skill set</h1>
            <section className="skills-card_container">
                {skillsCards}
                <SkillCardBottom />
            </section>
        </main>
    )
}

export default SkillsBoard;