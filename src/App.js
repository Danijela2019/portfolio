import React from 'react';
import Slider from './components/Slider'
import AboutMe from './components/AboutMe'
import NavBar from './components/Navbar'
import ExperineceBoard from './components/ExperienceBoard';

import './App.css';

function App() {
 return (
    <div className="App">
    <NavBar />
  <Slider />
  <AboutMe />
  <ExperineceBoard/>
    </div>
  );
}

export default App;
