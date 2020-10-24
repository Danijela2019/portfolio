import React from 'react'
import '../styles/ExperienceCard.css'

const ExperienceCard =({data})=> {
    return (
        <article className="experience_card">
                <h1 className="experience_header">{data.title}</h1>
                <h2 className="experience_subtitle">{data.subtitle}</h2>
                <p className="experience_text">{data.description}</p>
        </article>


    )
}

export default ExperienceCard;