import React from 'react'
import '../styles/SkillsBoard.css'
import css  from '../images/logos/css.png'
import html from '../images/logos/html.png'
import js from '../images/logos/js.png'
import nodejs from '../images/logos/nodejs.png'
import react from '../images/logos/react.png'
import react_native from '../images/logos/react_native.png'
import ts from '../images/logos/typescript.png'
import java from '../images/logos/java.png'
import pug from '../images/logos/pug.png'
import git from '../images/logos/git.png'
import postgres from '../images/logos/postgres.png'
import mongoDB from '../images/logos/mongoDB.png' 
import reactBootsrap from '../images/logos/reactBootstrap.png'
import sass from '../images/logos/sass.png'
import styled_components from '../images/logos/styled_components.png'








const SkillCard =()=> {
    return(
    <main className="skill-card_main">
    <section className="skill-card_logos">
    <img className="skill-card_logo_img" src={css} alt="CSS logo"></img>
    <img className="skill-card_logo_img" src={html} alt=">HTML logo"></img>
    </section>
    <a className="skill-card_link" href="https://github.com/Danijela2019/Gallery">
        <button className="skill-card_button">Some Example code</button>
    </a>
    </main>
    )
}

const SkillsBoard =()=> {
    return (
        <main className="skills_main">
         <h1 className="skills_header">Skill set</h1>
         <section className="skills-card_container">
         <SkillCard />
         <main className="skill-card_main">
    <section className="skill-card_logos">
    <img src={js} alt="JavaScript logo"></img>
    <img className="skill-card_logo_img" src={nodejs} alt=">Node JS logo"></img>
    </section>
    <a className="skill-card_link" href="https://github.com/Danijela2019/Movie-app">
        <button className="skill-card_button">Some Example code</button>
    </a>
    </main>
    <main className="skill-card_main">
    <section className="skill-card_logos">
    <img className="skill-card_logo_img"src={react} alt="React logo"></img>
   
    </section>
    <a className="skill-card_link" href="https://github.com/Danijela2019/to-do-list-react">
        <button className="skill-card_button">Some Example code</button>
    </a>
    </main>
    <main className="skill-card_main">
    <section className="skill-card_logos">
    <img className="skill-card_logo_img" src={react_native} alt="React native logo"></img>
    <img className="skill-card_logo_img" src={ts} alt="TypeScript logo"></img>
     </section>
    <a className="skill-card_link" href="https://github.com/Danijela2019/DoggyApp">
        <button className="skill-card_button">Some Example code</button>
    </a>
    </main>
    <main className="skill-card_main">
    <section className="skill-card_logos">
    <img className="skill-card_logo_img" src={pug} alt="Pug js logo"></img>
    </section>
    <a className="skill-card_link" href="https://github.com/Danijela2019/The-weather-app">
        <button className="skill-card_button">Some Example code</button>
    </a>
    </main>
    <main className="skill-card_main">
    <section className="skill-card_logos">
    <img src={java} alt="Java logo"></img>
   
    </section>
    <a className="skill-card_link" href="https://github.com/Danijela2019/to-do-list">
        <button className="skill-card_button">Some Example code</button>
    </a>
    </main>
     <main className="skill-card_bottom">
        <h1 className="skill-card_bottom_header">Other skills</h1>
        <section className="skill-card_bottom_logos">
            <img  className="skill-card_logo_img" src={git} alt="Git logo"></img>
            <img className="skill-card_logo_img" src={postgres} alt=">PostreSQL logo"></img>
            <img  className="skill-card_logo_img" src={mongoDB} alt="MongoDB logo"></img>
            <img className="skill-card_logo_img" src={reactBootsrap} alt="React bootstrap logo"></img>
            <img  className="skill-card_logo_img" src={sass} alt="Sass logo"></img>
            <img className="skill-card_logo_img" src={styled_components} alt=">Styled componenets logo"></img>
        </section>
    </main>
    </section>
        </main>

    )
}

export default SkillsBoard;