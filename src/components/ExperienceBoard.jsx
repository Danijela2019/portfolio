import React from 'react'
import '../styles/ExperienceBoard.css'

const ExperienceBoard =()=> {
    return (
        <main className="experience_main">
         <h1 className="experience_header">Experience</h1>
        <section className="experience_section">
            <article className="experience_novare_card">
                <h1 className="experience_novare_header">Software developement academy</h1>
                <h2 className="experience_novare_subtitle">( Computer Software Engineering / September 2019-December 2019)</h2>
                <p className="experience_novare_text">The Software Development Academy is a unique collaboration between Novare Potential and KTH that educates engaged talents from all over the world, ready to take on the IT challenges of the future
Main focus on: Object oriented programming with Java, Introduction to C, Agile, Scrum, Introduction to (Spring, Maven, MongoDB, Docker, Hibernate), HTML CSS and JavaScript, Basic SQL Databases, GitHub</p>
            </article>
            <article className="experience_salt_card">
                <h1 className="experience_salt_header"> School of applied technologies</h1>
                <h2 className="experience_salt_subtitle">( Full-stack JavaScript developer / April 2020-July 2020)</h2>
                <p className="experience_salt_text">Highly paced and very intense training program at Epicenter in Stockholm for for the highly motivated individuals who are ready to focus, work hard and complete the program to launch their new career in tech.
                     The accelerated learning is  based on professional and relevant work experience, once training is completed the developers are equipped to start working as a productive team member within a modern software development team.
                     Main focus on: HTML CSS and JavaScript, Node JS/Express, React, Redux, Basic SQL Databases, GitHub
                 </p>
            </article>
        </section>
     </main>
        
    )
}

export default ExperienceBoard;