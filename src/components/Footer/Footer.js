import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Container, Nav } from 'react-bootstrap';
import SocialMediaIcons from './SocialMediaIcons';
import FooterAddress from './FooterAddress';
import FooterStyles from '../../styles/components/Footer/Footer.module.scss';

export const NavItem = ({ link, name }) => (
    <Nav.Item>
        <Link to={link} className="nav-link">
            {name}
        </Link>
    </Nav.Item>
);

NavItem.propTypes = {
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

const Footer = () => (
    <footer className={FooterStyles.footer}>
        <div className={FooterStyles.footer__pre}>
            <SocialMediaIcons />
        </div>
        <div className={FooterStyles.footer__main}>
            <Container className="text-center">
                <Nav className="justify-content-center">
                    <NavItem link="/contact" name="Contact" />
                    <NavItem link="/legal" name="Legal" />
                    <NavItem link="/data-privacy" name="Data Privacy" />
                </Nav>
                <div className={FooterStyles.footer__address}>
                    <FooterAddress />
                </div>
            </Container>
        </div>
    </footer>
);

export default Footer;
