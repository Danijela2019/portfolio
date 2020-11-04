import React from 'react'
import portfolio from '../images/portfolio11.png'
import '../styles/NavBar.css'
import Icon from './Icon'
import { FaBars } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";


const NavBar = () => { 
    const showSidebar = () => {
     if (window.innerWidth < 400) {
        document.querySelector('.navbar_links').classList.toggle('open');
      }
    }

    const scrollToTop = () => {
        scroll.scrollToTop();
    };
  
    return (
        <div className="navbar_container">
            <div className="navbar_wrapper">
                <img className="navbar_logo" src={portfolio} onClick={scrollToTop} alt="Portfolio logo"/> 
                <div className="navbar_toggle" onClick={showSidebar}>
                    <Icon>
                        <FaBars/>   
                    </Icon>
                </div> 
            </div>
            <nav >
                <ul className="navbar_links">
                    <li className="navbar_item">
                        <Link className="navbar_link"
                            onClick={showSidebar}
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={100} >Home
                        </Link>
                    </li>
                    <li className="navbar_item">
                        <Link className="navbar_link" 
                        
                        onClick={showSidebar}
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={100}>
                            About</Link>
                    </li>
                    <li className="navbar_item">
                        <Link className="navbar_link"
                            onClick={showSidebar}
                            to="experience"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={100} 
                        >
                            Experience
                        </Link>
                    </li>
                    <li className="navbar_item">
                        <Link className="navbar_link"
                            onClick={showSidebar}
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={100}
                        >
                            Skills
                        </Link>
                    </li>
                    <li className="navbar_item">
                        <Link className="navbar_link"
                            onClick={showSidebar}
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={100} 
                        >
                            Projects
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )

}
export default NavBar;







           