import React from 'react';
import '../../styles/Background.css';
import TypeWritingEfect from './Typewriting';
import contactData from '../../data/contact_data';
import Icon from '../../components/Icon'

const Contact = ({ contact }) => {
    return (
        <a className="contact_anchor" href={contact.link} target="_blank" rel="noopener noreferrer">
            <Icon color="#e3f6f5">
                {contact.source}
            </Icon>
        </a>
    );
};

const contactInfo = contactData.map((contact, index) => <Contact contact={contact} key={index} />);

const Background = () => {
    return (
        <section className="wrapper">
            <h1 className="header">Hello</h1>
            <div className='background_contact'>
                {contactInfo}
            </div>
            <TypeWritingEfect />
        </section>
    );
};

export default Background;
