import React from 'react';
import Typewriter from 'typewriter-effect';

import '../styles/Typewriting.css'
 
const TypeWritingEfect =() => {
    return (
        <div className="text">
            <Typewriter  options={{
                autoStart: true,
                loop: true,
            }}
            onInit={(typewriter) => {
                typewriter.typeString('Hi! My name is Danijela Milenkovic.')
                .pauseFor(1500)
                typewriter.typeString(`<h1>An IT entusiast.<h1/>`)
                .pauseFor(2500)
                .deleteChars(16)
                typewriter.typeString('A life long learner.')
                .pauseFor(2500)
                .deleteChars(20)
                typewriter.typeString('A movie fan.')
                .pauseFor(2500)
                .deleteChars(12)
                .start();
            }}
            />
    </div>
    )
}

export default  TypeWritingEfect;