import React from 'react';

import Home from './home';
import About from './about';
import Education from './education';
import Skills from './skills';
import Projects from './projects';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

const AllPages = () => {
    return (
        <React.Fragment>
            <NavBar />
            <Home title="home" id="home" />
            <About title="about" id="about" />
            <Education title="education" id="education" />
            <Skills title="skills" id="skills" />
            <Projects title="projects" id="projects" />
            <Footer />
        </React.Fragment>
    );
};

export default AllPages;
