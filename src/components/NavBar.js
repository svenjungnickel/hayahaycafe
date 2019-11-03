import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';
import { Navbar, Nav } from 'react-bootstrap';
import useDarkMode from 'use-dark-mode';
import Image from './Image';
import DarkModeToggle from './DarkModeToggle';
import NavBarStyles from '../styles/components/NavBar.module.scss';
import DarkModeToggleStyle from '../styles/components/DarkModeToggle.module.scss';

const Logo = ({ logo, className }) => (
    <div className={className}>
        <Link to="/">
            <Image src={logo.src} alt="Logo" className={NavBarStyles.navBar__logo} />
        </Link>
    </div>
);

Logo.propTypes = {
    logo: PropTypes.shape({
        src: PropTypes.string.isRequired,
    }).isRequired,
    className: PropTypes.string.isRequired,
};

const NavItem = ({ link, name, active }) => (
    <Nav.Item className={NavBarStyles.navBar__item}>
        <Link to={link} className={true === active ? 'nav-link active' : 'nav-link'}>
            {name}
        </Link>
    </Nav.Item>
);

NavItem.defaultProps = {
    active: false,
};

NavItem.propTypes = {
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    active: PropTypes.bool,
};

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
            render={data => (
                <Navbar
                    collapseOnSelect
                    variant={true === darkMode.value ? 'dark' : 'light'}
                    expand="md"
                    fixed="top"
                    id="site-navbar"
                    className={true === smallNavBar ? NavBarStyles.navBarSmall : NavBarStyles.navBar}
                >
                    <Logo logo={data.logoMobile.childImageSharp.fixed} className="d-block d-md-none" />
                    <DarkModeToggle darkMode={darkMode} className="d-block d-md-none" />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-right" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                        <Nav className={NavBarStyles.navBar__items}>
                            <NavItem link="/" name="Home" active={currentPage === '/'} />
                            <Logo logo={data.logo.childImageSharp.fixed} className="d-none d-md-block" />
                            <NavItem link="/story" name="Story" active={currentPage === '/story'} />
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
