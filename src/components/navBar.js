import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';
import { Navbar, Nav } from 'react-bootstrap';
import useDarkMode from 'use-dark-mode';
import DarkModeToggle from './darkModeToggle';
import Styles from '../styles/components/navbar.module.scss';
import DarkModeToggleStyle from '../styles/components/darkModeToggle.module.scss';

const Logo = ({ logo, className }) => (
    <div className={className}>
        <Link to="/#home" className="link-no-style">
            <img src={logo.src} alt="Logo" className={Styles.navBar__logo} />
        </Link>
    </div>
);

Logo.propTypes = {
    logo: PropTypes.shape({
        src: PropTypes.string.isRequired,
    }).isRequired,
    className: PropTypes.string.isRequired,
};

const NavItem = ({ link, name }) => (
    <Nav.Item className={Styles.navBar__item}>
        {/*<Nav.Link href={link} className={Styles.navBar__link}>*/}
        <Link to={link} className={`nav-link ${Styles.navBar__link}`}>
            {name}
        </Link>
    </Nav.Item>
);

NavItem.propTypes = {
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

const NavBar = ({ currentPage }) => {
    const darkMode = useDarkMode(false);

    if (typeof window !== 'undefined') {
        // eslint-disable-next-line global-require
        require('smooth-scroll')('a[href*="#"]', {
            speed: 800,
            speedAsDuration: true,
            easing: 'easeInOutCubic',
            offset: 96, // 136 on desktop
        });
    }

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
                    sticky="top"
                    id="site-navbar"
                    className={Styles.navBar}
                >
                    <Logo logo={data.logoMobile.childImageSharp.fixed} className="d-block d-md-none" />
                    <DarkModeToggle className="d-block d-md-none" />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-right" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                        <Nav className={Styles.navBar__items} activeKey={currentPage}>
                            <NavItem link="/#home" name="Home" />
                            <NavItem link="/#cafe" name="Cafe" />
                            <Logo logo={data.logo.childImageSharp.fixed} className="d-none d-md-block" />
                            <NavItem link="/#gallery" name="Gallery" />
                            {/*<NavItem link="/shop" name="Shop" />*/}
                            {/*<NavItem link="/service" name="Service" />*/}
                            <NavItem link="/contact" name="Contact" />
                        </Nav>
                    </Navbar.Collapse>
                    <div className={DarkModeToggleStyle.darkModeToggle}>
                        <DarkModeToggle className="d-none d-md-block" />
                    </div>
                </Navbar>
            )}
        />
    );
};

NavBar.propTypes = {
    currentPage: PropTypes.string,
};

export default NavBar;
