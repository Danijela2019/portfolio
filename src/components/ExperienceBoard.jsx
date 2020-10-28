import React from 'react'
import '../styles/ExperienceBoard.css'
import ExperienceCard from './ExperienceCard'


const experienceData = [
    {
        id:1,
        title: "Software developement academy",
        subtitle: "Computer Software Engineering ",
        duration: 'Septmeber2019 -December 2019',
        description:  `The Software Development Academy is a unique collaboration
        between Novare Potential and KTH that educates engaged talents from 
        all over the world, ready to take on the IT challenges of the future
        Main focus on: Object oriented programming with Java, Introduction to C, 
        Agile, Scrum, Introduction to (Spring, Maven, MongoDB, Docker, Hibernate),
        HTML CSS and JavaScript, Basic SQL Databases, GitHub`
    },
    {
        id:2,
        title: "School of applied technologies (SALT)",
        subtitle: "Full-stack JavaScript developer",
        duration: "April 2020-July 2020",
        description: `Highly paced and very intense training program at Epicenter in Stockholm 
        for for the highly motivated individuals who are ready to focus,
         work hard and complete the program to launch their new career in tech.
        The accelerated learning is  based on professional and relevant work experience, 
        once training is completed the developers are equipped to start working as 
        a productive team member within a modern software development team.`
    }
]

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