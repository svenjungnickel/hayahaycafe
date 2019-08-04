import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import SocialMediaIcons from './socialMediaIcons';
import FooterStyles from '../styles/components/footer.module.scss';

export default ({ siteMetadata }) => (
    <footer className={FooterStyles.footer}>
        <div className={FooterStyles.footer__pre}>
            <SocialMediaIcons items={siteMetadata.socialMedia} />
        </div>
        <div className={FooterStyles.footer__main}>
            <Container className="text-center">
                <Nav className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/legal">Legal</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/data-privacy">Data Privacy</Nav.Link>
                    </Nav.Item>
                </Nav>

                <div className={FooterStyles.footer__address}>
                    <p>{siteMetadata.address}</p>
                </div>
            </Container>
        </div>
    </footer>
);
