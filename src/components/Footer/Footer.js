import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Container, Nav } from 'react-bootstrap';
import SocialMediaIcons from './SocialMediaIcons';
import FooterAddress from './FooterAddress';
import { footer, footer__pre, footer__main, footer__address } from '../../styles/components/Footer/Footer.module.scss';

export const NavItem = ({ link, name }) => (
    <Nav.Item>
        <Link to={link} className="nav-link" data-cy={`footerLink${name.replace(' ', '')}`}>
            {name}
        </Link>
    </Nav.Item>
);

NavItem.propTypes = {
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

const Footer = () => (
    <footer className={footer}>
        <div className={footer__pre}>
            <SocialMediaIcons />
        </div>
        <div className={footer__main}>
            <Container className="text-center">
                <Nav className="justify-content-center">
                    <NavItem link="/legal" name="Legal" />
                    <NavItem link="/data-privacy" name="Data Privacy" />
                </Nav>
                <div className={footer__address} data-cy="footerAddress">
                    <FooterAddress />
                </div>
            </Container>
        </div>
    </footer>
);

export default Footer;
