import React from 'react'
import { NavLink } from 'react-router-dom'
import portfolio from '../images/portfolio11.png'
import '../styles/NavBar.css'


const navLinkStyle = {
textDecoration: 'none',
color:"black",
fontFamily: 'Nunito, sans-serif',
textTransform: 'uppercase',
transition: '0.2s'
}



 const NavBar = () => { 
    return (
        <nav className="navbar_container sticky">
            <img className="navbar_logo" src={portfolio} alt="Portfolio logo"/> 
            <ul className="main-nav">
                <li className="navbar_item"><NavLink exact to="/" style={navLinkStyle}>Home</NavLink></li>
                <li className="navbar_item"><NavLink to="/about" style={navLinkStyle}>About</NavLink></li>
                <li className="navbar_item"><NavLink to="/experience" style={navLinkStyle}>Experience</NavLink></li>
                <li className="navbar_item"><NavLink to="/skills" style={navLinkStyle}>Skills</NavLink></li>
                <li className="navbar_item"><NavLink to="/projects" style={navLinkStyle}>Projects</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar;