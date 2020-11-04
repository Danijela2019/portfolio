import React from 'react';

import Home from './Home';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'

const AllPages = () => {
    return (
        <React.Fragment>
            <NavBar/>
            <Home title="home" id="home"/> 
            <About title="about" id="about"/>
            <Experience title="experience" id="experience"/>
            <Skills title="skills" id="skills"/>
            <Projects title="projects" id="projects"/>
            <Footer/>
        </React.Fragment>
    )
}

export default AllPages;