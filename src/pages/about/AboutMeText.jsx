import React from 'react';
import Emoji from 'a11y-react-emoji';

import '../../styles/about/AboutmeText.css';
import aboutMeData from '../../data/about_me_data';
import CVButton from './CVButton';

const Paragraph = ({ text }) => {
    return <p className="aboutme_paragraph">{text.text}</p>;
};

const textData = aboutMeData.map((text, index) => (
    <Paragraph className="aboutme_text_content" text={text} key={index} />
));

const AboutMeText = () => {
    return (
        <article className="aboutme_text_article">
            <h1 className="aboutme_text_title">
                Hello world
            </h1>
            {textData}
            <CVButton />
        </article>
    );
};

export default AboutMeText;
