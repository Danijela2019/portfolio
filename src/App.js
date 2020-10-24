import React from 'react';
import Slider from './components/Slider'
import AboutMe from './components/AboutMe'
import NavBar from './components/Navbar'
import ExperineceBoard from './components/ExperienceBoard';

import './App.css';
import SkillsBoard from './components/SkillsBoard';
import TimelineBoard from './components/TimelineBoard';

function App() {
 return (
    <div className="App">
    <NavBar />
  <Slider />
  <AboutMe />
  <ExperineceBoard/>
  <SkillsBoard />
  <TimelineBoard />
    </div>
  );
}

export default App;
