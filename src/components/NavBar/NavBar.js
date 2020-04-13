import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Navbar, Nav } from 'react-bootstrap';
import useDarkMode from 'use-dark-mode';
import Logo from './Logo';
import NavItem from './NavItem';
import DarkModeToggle from './DarkModeToggle';
import NavBarStyles from '../../styles/components/NavBar/NavBar.module.scss';
import DarkModeToggleStyle from '../../styles/components/NavBar/DarkModeToggle.module.scss';

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
        <StaticQuery
            query={graphql`
                query {
                    logoMobile: file(relativePath: { eq: "logo.png" }) {
                        childImageSharp {
                            fixed(height: 80) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                    logo: file(relativePath: { eq: "logo.png" }) {
                        childImageSharp {
                            fixed(height: 120) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                }
            `}
            render={(data) => (
                <Navbar
                    collapseOnSelect
                    variant={true === darkMode.value ? 'dark' : 'light'}
                    expand="md"
                    fixed="top"
                    id="site-navbar"
                    className={true === smallNavBar ? NavBarStyles.navBarSmall : NavBarStyles.navBar}
                    data-cy="navBar"
                >
                    <Logo logo={data.logoMobile.childImageSharp.fixed} className="d-block d-md-none" />
                    <DarkModeToggle darkMode={darkMode} className="d-block d-md-none" />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-right" data-cy="navBarToggle" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                        <Nav className={NavBarStyles.navBar__items}>
                            <NavItem link="/" name="Home" active={currentPage === '/'} />
                            <NavItem link="/about" name="About" active={currentPage === '/about'} />
                            <Logo logo={data.logo.childImageSharp.fixed} className="d-none d-md-block" />
                            <NavItem link="/gallery" name="Gallery" active={currentPage === '/gallery'} />
                            <NavItem link="/contact" name="Contact" active={currentPage === '/contact'} />
                        </Nav>
                    </Navbar.Collapse>
                    <div className={DarkModeToggleStyle.darkModeToggle}>
                        <DarkModeToggle darkMode={darkMode} className="d-none d-md-block" />
                    </div>
                </Navbar>
            )}
        />
    );
};

NavBar.propTypes = {
    currentPage: PropTypes.string.isRequired,
};

export default NavBar;
