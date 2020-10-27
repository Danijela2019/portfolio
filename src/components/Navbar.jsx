import React from 'react'
import { NavLink } from 'react-router-dom'
import portfolio from '../images/portfolio.png'
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

<div className="navbar_container">
    <div className="navbar_logo_and_title_container">
    <img className="navbar_logo" src={portfolio} alt="Portfolio logo"/> 
    <h1 className="navbar_title">My portofolio</h1>
    </div>
    <ul className="main-nav">
    <li className="navbar_item"><NavLink exact to="/"  style={navLinkStyle}>Home</NavLink></li>
    <li className="navbar_item"><NavLink to="/about"  style={navLinkStyle}>About</NavLink></li>
    <li className="navbar_item"><NavLink to="/experience" style={navLinkStyle}>Experience</NavLink></li>
    <li className="navbar_item"><NavLink to="/skills"  style={navLinkStyle}>Skills</NavLink></li>
    <li className="navbar_item"><NavLink to="/projects"  style={navLinkStyle}>Projects</NavLink></li>
    </ul>
</div>
    )
}
export default NavBar;