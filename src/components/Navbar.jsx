import React, { useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';

import portfolio from '../images/portfolio11.png';
import '../styles/NavBar.css';
import '../styles/common.css';
import Icon from './Icon';
import linkData from '../data/navbar_data';

const NavBar = () => {
    const navBarLinks = useRef();
    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    const showSidebar = () => {
        if (window.innerWidth < 767) {
            navBarLinks.current.classList.toggle('open');
        }
    };

    const links = linkData.map((item, index) => (
        <li key={index} className="navbar_item">
            <Link
                className="navbar_link"
                onClick={showSidebar}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-50}
                duration={100}>
                {item.title}
            </Link>
        </li>
    ));

    return (
        <div className="navbar_container">
            <div className="navbar_wrapper">
                <img
                    className="navbar_logo"
                    src={portfolio}
                    onClick={scrollToTop}
                    alt="Portfolio logo"
                />
                <div className="navbar_toggle" onClick={showSidebar}>
                    <Icon color="var(--white)">
                        <FaBars />
                    </Icon>
                </div>
            </div>
            <nav>
                <ul ref={navBarLinks} className="navbar_links">
                    {links}
                </ul>
            </nav>
        </div>
    );
};
export default NavBar;
