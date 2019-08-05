import React from 'react';
import { Link } from 'gatsby';
import { Container, Nav } from 'react-bootstrap';
import SocialMediaIcons from './socialMediaIcons';
import FooterStyles from '../styles/components/footer.module.scss';

export default ({ siteMetadata }) => {
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
                <SocialMediaIcons items={siteMetadata.socialMedia} />
            </div>
            <div className={FooterStyles.footer__main}>
                <Container className="text-center">
                    <Nav className="justify-content-center">
                        <NavItem link="/contact" name="Contact" />
                        <NavItem link="/legal" name="Legal" />
                        <NavItem link="/data-privacy" name="Data Privacy" />
                    </Nav>

                    <div className={FooterStyles.footer__address}>
                        <p>{siteMetadata.address}</p>
                    </div>
                </Container>
            </div>
        </footer>
    );
};
