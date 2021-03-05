import React from 'react';
import Typewriter from 'typewriter-effect';

import '../../styles/home/Typewriting.css';

const TypeWritingEfect = () => {
    return (
        <div className="homeboard_text">
            <Typewriter
                options={{
                    autoStart: true,
                    loop: true
                }}
                onInit={(typewriter) => {
                    typewriter.typeString('Hi! My name is Danijela Milenkovic.').pauseFor(1500);
                    typewriter
                        .typeString(`<h1>I'm an IT entusiast.<h1/>`)
                        .pauseFor(2500)
                        .deleteChars(20);
                    typewriter
                        .typeString(`I'm a life long learner.`)
                        .pauseFor(2500)
                        .deleteChars(24);
                    typewriter
                        .typeString(`I'm a movie fan.`)
                        .pauseFor(2500)
                        .deleteChars(12)
                        .start();
                }}
            />
        </div>
    );
};

export default TypeWritingEfect;
