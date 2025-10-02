import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Navbar, Nav } from 'react-bootstrap';
import useDarkMode from 'use-dark-mode';
import NavItem from './NavItem';
import DarkModeToggle from './DarkModeToggle';
import { navBar, navBar__items, navBarSmall } from '../../styles/components/NavBar/NavBar.module.scss';
import { darkModeToggle } from '../../styles/components/NavBar/DarkModeToggle.module.scss';
import { navBar__logo } from '../../styles/components/NavBar/NavBar.module.scss';

const NavBar = ({ currentPage }) => {
    currentPage = `/${currentPage}`;
    const darkMode = useDarkMode(false);
    const [smallNavBar, setSmallNavBar] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            // minimize nav bar only when scrolled past the nav bar height to avoid annoying flickering
            setSmallNavBar(window.pageYOffset > 135);
        });
    });

    return (
        <Navbar
            collapseOnSelect
            variant={true === darkMode.value ? 'dark' : 'light'}
            expand="md"
            fixed="top"
            id="site-navbar"
            className={true === smallNavBar ? navBarSmall : navBar}
            data-cy="navBar"
        >
            <div className="d-block d-md-none">
                <Link to="/" data-cy="navBarLinkLogo" aria-label="back to startpage">
                    <StaticImage
                        src="../../../assets/logo.png"
                        width={97}
                        height={80}
                        alt="Logo"
                        loading="eager"
                        className={navBar__logo}
                    />
                </Link>
            </div>
            <DarkModeToggle darkMode={darkMode} className="d-block d-md-none" />
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-right" data-cy="navBarToggle" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                <Nav className={navBar__items}>
                    <NavItem link="/" name="Home" active={currentPage === '/'} />
                    <NavItem link="/menu" name="Brunch" active={currentPage === '/menu'} />
                    <NavItem link="/dinner-menu" name="Dinner" active={currentPage === '/dinner-menu'} />
                    <NavItem link="/about" name="About" active={currentPage === '/about'} />
                    <div className="d-none d-md-block">
                        <Link to="/" data-cy="navBarLinkLogo" aria-label="back to startpage">
                            <StaticImage
                                src="../../../assets/logo.png"
                                width={146}
                                height={120}
                                alt="Logo"
                                loading="eager"
                                className={navBar__logo}
                            />
                        </Link>
                    </div>
                    <NavItem link="/gallery" name="Gallery" active={currentPage === '/gallery'} />
                    <NavItem link="/contact" name="Contact" active={currentPage === '/contact'} />
                </Nav>
            </Navbar.Collapse>
            <div className={darkModeToggle}>
                <DarkModeToggle darkMode={darkMode} className="d-none d-md-block" />
            </div>
        </Navbar>
    );
};

NavBar.propTypes = {
    currentPage: PropTypes.string.isRequired,
};

export default NavBar;
