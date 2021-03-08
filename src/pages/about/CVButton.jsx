import React from 'react';
import { FaFilePdf } from 'react-icons/fa';

import '../../styles/about/CVButton.css';
import Icon from '../../components/Icon';

const CVButton = () => {
    return (
        <button className="aboutme_logo_button">
            <a
                className="aboutme_logo_cv_achor"
                href="https://drive.google.com/file/d/1HaOb84vAzgvN4Y-dYkd1-43UZFX0kT4a/view"
                target="_blank"
                rel="noopener noreferrer">
                <Icon color="black">
                    <FaFilePdf />
                </Icon>
                Go to CV
            </a>
        </button>
    );
};

export default CVButton;
