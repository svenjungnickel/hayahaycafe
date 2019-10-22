import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { Navbar, Nav } from 'react-bootstrap';
import Styles from '../styles/components/navbar.module.scss';

export default ({ currentPage }) => {
    if (typeof window !== 'undefined') {
        // eslint-disable-next-line global-require
        require('smooth-scroll')('a[href*="#"]', {
            speed: 800,
            speedAsDuration: true,
            easing: 'easeInOutCubic',
            offset: 96, // 136 on desktop
        });
    }

    const Logo = ({ logo, className }) => (
        <div className={className}>
            <Link to="/#home" className="link-no-style">
                <img src={logo.src} alt="Logo" className={Styles.navBar__logo} />
            </Link>
        </div>
    );

    const NavItem = ({ link, name }) => (
        <Nav.Item className={Styles.navBar__item}>
            {/*<Nav.Link href={link} className={Styles.navBar__link}>*/}
            <Link to={link} className={`nav-link ${Styles.navBar__link}`}>
                {name}
            </Link>
        </Nav.Item>
    );

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
                    variant="light"
                    expand="md"
                    sticky="top"
                    id="site-navbar"
                    className={Styles.navBar}
                >
                    <Logo logo={data.logoMobile.childImageSharp.fixed} className="d-block d-md-none" />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                        <Nav className={Styles.navBar__items} activeKey={currentPage}>
                            <NavItem link="/#home" name="Home" />
                            <NavItem link="/#cafe" name="Cafe" />
                            <Logo logo={data.logo.childImageSharp.fixed} className="d-none d-sm-block" />
                            <NavItem link="/#gallery" name="Gallery" />
                            {/*<NavItem link="/shop" name="Shop" />*/}
                            {/*<NavItem link="/service" name="Service" />*/}
                            <NavItem link="/contact" name="Contact" />
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            )}
        />
    );
};
