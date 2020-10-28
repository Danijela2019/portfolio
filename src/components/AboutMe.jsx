import React from 'react'
import Emoji from 'a11y-react-emoji';
import photo from '../images/profile_photo.jpg'
import gmail from '../images/logos/gmail.png'
import linkedin from '../images/logos/linkedin.png'
import github from '../images/logos/github.png'

import '../styles/AboutMe.css'

const EmojiHand = () => {
    return (
        <Emoji symbol="👋 " label="Waiving hand" />
    )
}


const AboutMe = () => { 
    return (
<main className="aboutme">
    <h1 className="aboutme_header">About me</h1>
    <section className="aboutme_section">
        <article className="aboutme_img_article">
            <img className="aboutme_img_photo" src={photo} alt=""></img>
            <a href="https://drive.google.com/file/d/1HaOb84vAzgvN4Y-dYkd1-43UZFX0kT4a/view" rel="noopener noreferrer">
                <button className="aboutme_img_button">Check my CV</button>
            </a>
        </article>

        <article className="aboutme_text_article">
            <h1 className="aboutme_text-title">Hello world<EmojiHand /></h1>
            <p className="aboutme_text-content">I am an IT entusiast and life-long learner allways looking for some new chalenges in life.</p>

            <p className="aboutme_text-content" > I love coding, creating new software and see it coming to life is an amasing feeling.

            I have been through 2 bootcamps on my jurney of becoming a software developer.</p>

            <p className="aboutme_text-content">I gratuated from SALT recently and I am super existed for getting the chanse to do what I love to do.</p>

             <p className="aboutme_text-content">I have a passion for teaching, I would love to become a mentor one day and teach others what
              I know or maybe start writing blogs very soon </p>
             <p className="aboutme_text-content"> You want to know more about me, or my projects please fell free to contact me: </p>
            <div className="aboutme_logo-container">
                <a href="mailto:danijela.milenkovic@appliedtechnology.se">
                    <img src={gmail} alt="gmail logo"></img>
                </a>
                <a href="https://www.linkedin.com/in/danijela-milenkovic-926b0a57/" >
                    <img src={linkedin} alt="linkedin logo"></img>
                </a>
                <a href="https://github.com/Danijela2019">
                    <img src={github} alt="github logo"></img>
                </a>
            </div>
        </article>
    </section>
</main>
    )
    
}
export default AboutMe;