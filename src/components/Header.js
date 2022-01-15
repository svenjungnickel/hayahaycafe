import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import Image from './Image';
import { header, header__image, header__content, header__contentInner } from '../styles/components/Header.module.scss';

const Header = ({ headerImage, title, subtitle }) => (
    <header className={header}>
        <Image src={headerImage} alt="header" className={header__image} />

        <div className={header__content}>
            <Container>
                <div className={header__contentInner}>
                    <h1 className="display-1">{title}</h1>
                    {subtitle && <p className="lead">{subtitle}</p>}
                </div>
            </Container>
        </div>
    </header>
);

Header.propTypes = {
    headerImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
};

export default Header;
