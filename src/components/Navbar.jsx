import React from 'react'
import { NavLink } from 'react-router-dom'
import portfolio from '../images/portfolio11.png'
import '../styles/NavBar.css'


const NavBar = () => { 
    return (
        <nav className="navbar_container">
            <img className="navbar_logo" src={portfolio} alt="Portfolio logo"/> 
            <ul className="main-nav">
                <li className="navbar_item">
                    <NavLink className="navbar_link" exact to="/">Home</NavLink>
                </li>
                <li className="navbar_item">
                    <NavLink className="navbar_link" to="/about">About</NavLink>
                </li>
                <li className="navbar_item">
                    <NavLink className="navbar_link" to="/experience">Experience</NavLink>
                </li>
                <li className="navbar_item">
                    <NavLink className="navbar_link" to="/skills">Skills</NavLink>
                </li>
                <li className="navbar_item">
                    <NavLink className="navbar_link" to="/projects">Projects</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;