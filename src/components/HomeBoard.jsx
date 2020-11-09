import React from 'react';

import '../styles/HomeBoard.css';
import TypeWritingEfect from './Typewriting';

const HomeBoard = () => {
    return (
        <main className="homeboard_main" id="home">
            <section className="background">
                <article className="homeboard_transbox">
                   <TypeWritingEfect/>
                </article>
            </section>
        </main>
    )

}


export default HomeBoard;