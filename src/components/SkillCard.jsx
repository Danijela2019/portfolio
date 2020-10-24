import React from 'react'
import '../styles/SkillCard.css'

    


const SkillCard =({data})=> {
    return(
    <main className="skill-card_main">
    <section className="skill-card_logos">
    <img className="skill-card_logo_img" src={data.logo1} alt={data.alternative1}></img>
    <img className="skill-card_logo_img" src={data.logo2} alt={data.alternative2}></img>
    </section>
    <a className="skill-card_link" href={data.link}>
        <button className="skill-card_button">Some Example code</button>
    </a>
    </main>
    )
}

export default SkillCard;