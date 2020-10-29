import React from 'react'
import ExperienceCard from './ExperienceCard'

import '../styles/ExperienceBoard.css'
import experienceData from '../data/experience_data'


const skillsCards =  experienceData.map((data) => (
    <ExperienceCard data={data} key={data.id} />
))


const ExperienceBoard =()=> {
    return (
        <main className="experience_main">
            <h1 className="experience_main_header">Experience</h1>
            <section className="experience_section">  
                {skillsCards}
            </section>
        </main>
        
    )
}

export default ExperienceBoard;