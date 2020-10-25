import React from 'react';
import Slider from './components/Slider'
import AboutMe from './components/AboutMe'
import NavBar from './components/Navbar'
import ExperineceBoard from './components/ExperienceBoard';
import SkillsBoard from './components/SkillsBoard';
import TimelineBoard from './components/TimelineBoard';
import Footer from './components/Footer'
import './App.css';

function App() {
 return (
    <div className="App">
    <NavBar />
  <Slider />
  <AboutMe />
  <ExperineceBoard/>
  <SkillsBoard />
  <TimelineBoard />
  <Footer />
    </div>
  );
}

export default App;
