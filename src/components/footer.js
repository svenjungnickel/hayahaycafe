import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Container, Nav } from 'react-bootstrap';
import SocialMediaIcons from './socialMediaIcons';
import FooterStyles from '../styles/components/footer.module.scss';

const Footer = ({ socialMedia, address }) => {
    const NavItem = ({ link, name }) => (
        <Nav.Item>
            <Link to={link} className="nav-link">
                {name}
            </Link>
        </Nav.Item>
    );

    return (
        <footer className={FooterStyles.footer}>
            <div className={FooterStyles.footer__pre}>
                <SocialMediaIcons items={socialMedia} />
            </div>
            <div className={FooterStyles.footer__main}>
                <Container className="text-center">
                    <Nav className="justify-content-center">
                        <NavItem link="/contact" name="Contact" />
                        <NavItem link="/legal" name="Legal" />
                        <NavItem link="/data-privacy" name="Data Privacy" />
                    </Nav>

                    {address && (
                        <div className={FooterStyles.footer__address}>
                            <p>{address}</p>
                        </div>
                    )}
                </Container>
            </div>
        </footer>
    );
};

Footer.propTypes = {
    socialMedia: PropTypes.arrayOf(PropTypes.object).isRequired,
    address: PropTypes.string,
};

export default Footer;
