import React from 'react'
import Emoji from 'a11y-react-emoji';
import { FaFilePdf } from "react-icons/fa";

import photo from '../images/profile_photo.png'
import '../styles/AboutMe.css'
import aboutMeData from '../data/about_me_data'
import contactData from '../data/contact_data'
import Icon from './Icon'



const EmojiHand = () => {
    return (
        <Emoji symbol="👋 " label="Waiving hand" />
    )
};

const Paragraph = ({ text }) => {
    return (
       <p className="aboutme_paragraph">{text.text}</p> 
    )
};

const textData = aboutMeData.map((text, index) => (
    <Paragraph className="aboutme_text_content" text={text} key={index} />
))

const Contact = ({ contact }) => {
    return (
        <a href= {contact.link} target="_blank" rel="noopener noreferrer">
            <img className="aboutme_logo" src={contact.source} alt={contact.alternative}></img>
        </a>
    )
};

const contactInfo =  contactData.map((contact, index) => (
    <Contact contact={contact} key={index} />
))

const ContactInformation = () => {
    return (
        <div className="aboutme_logo_container" id='about'>
            <a className="aboutme_logo_cv_achor" href="https://drive.google.com/file/d/1HaOb84vAzgvN4Y-dYkd1-43UZFX0kT4a/view" target="_blank" rel="noopener noreferrer">
                <button className="aboutme_logo_button">
                    <Icon>
                        <FaFilePdf/>
                    </Icon>
                    my CV
                </button>
            </a>
            {contactInfo}
        </div>
    )
};

const AboutMeText = () => { 
    return (
        <article className="aboutme_text_article">
            <h1 className="aboutme_text_title">
                Hello world
                <EmojiHand />
            </h1>
            {textData}
            <ContactInformation/>
        </article>
    )
};

const AboutMe = () => { 
    return (
        <main className="aboutme_main" id="about">
            <h1 className="aboutme_header">About me</h1>
            <section className="aboutme_section">
                <img className="aboutme_img_photo" src={photo} alt=""></img>
                <AboutMeText />
            </section>
        </main>
    )
};

export default AboutMe;