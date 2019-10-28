import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link, StaticQuery } from 'gatsby';
import { Container, Nav } from 'react-bootstrap';
import SocialMediaIcons from './socialMediaIcons';
import FooterStyles from '../styles/components/footer.module.scss';

const NavItem = ({ link, name }) => (
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
    <StaticQuery
        query={graphql`
            query {
                globalSettings: settingsYaml {
                    address
                    socialMedia {
                        url
                        type
                    }
                }
            }
        `}
        render={({ globalSettings }) => (
            <footer className={FooterStyles.footer}>
                <div className={FooterStyles.footer__pre}>
                    <SocialMediaIcons items={globalSettings.socialMedia} />
                </div>
                <div className={FooterStyles.footer__main}>
                    <Container className="text-center">
                        <Nav className="justify-content-center">
                            <NavItem link="/contact" name="Contact" />
                            <NavItem link="/legal" name="Legal" />
                            <NavItem link="/data-privacy" name="Data Privacy" />
                        </Nav>

                        {globalSettings.address && (
                            <div className={FooterStyles.footer__address}>
                                <p>{globalSettings.address}</p>
                            </div>
                        )}
                    </Container>
                </div>
            </footer>
        )}
    />
);

export default Footer;
