import React from 'react';
import { FaFilePdf } from 'react-icons/fa';

import '../../styles/about/CVButton.css';
import Icon from '../../components/Icon';

const CVButton = () => {
    return (
        <button className="aboutme_logo_button">
            <a
                className="aboutme_logo_cv_achor"
                href="https://drive.google.com/file/d/1x8hbVgY0grfu4OGntg1YTyaIVcFWscAY/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer">
                <Icon color="white">
                    <FaFilePdf />
                </Icon>
                Go to CV
            </a>
        </button>
    );
};

export default CVButton;
