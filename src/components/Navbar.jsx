import React from 'react'
import { NavLink } from 'react-router-dom'
import portfolio from '../images/portfolio11.png'
import '../styles/NavBar.css'
import Icon from './Icon'
import { FaBars } from "react-icons/fa";


const NavBar = () => { 
    const showSidebar = () => {
     if (window.innerWidth < 400) {
        document.querySelector('.navbar_links').classList.toggle('open');
      }
    }
  
    return (
        <div className="navbar_container">
            <div className="navbar_wrapper">
                <img className="navbar_logo" src={portfolio} alt="Portfolio logo"/> 
                <div className="navbar_toggle" onClick={showSidebar}>
                    <Icon>
                        <FaBars/>   
                    </Icon>
                </div> 
            </div>
            <nav>
                <ul className="navbar_links">
                    <li className="navbar_item">
                        <NavLink className="navbar_link" onClick={showSidebar} exact to="/">Home</NavLink>
                    </li>
                    <li className="navbar_item">
                        <NavLink className="navbar_link" onClick={showSidebar} to="/about">About</NavLink>
                    </li>
                    <li className="navbar_item">
                        <NavLink className="navbar_link" onClick={showSidebar} to="/experience">Experience</NavLink>
                    </li>
                    <li className="navbar_item">
                        <NavLink className="navbar_link" onClick={showSidebar} to="/skills">Skills</NavLink>
                    </li>
                    <li className="navbar_item">
                        <NavLink className="navbar_link"  onClick={showSidebar} to="/projects">Projects</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )

}
export default NavBar;







           