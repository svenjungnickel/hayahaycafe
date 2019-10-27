import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import Image from './image';
import IndexStyles from '../styles/components/header.module.scss';

const Header = ({ headerImage, title, subtitle }) => (
    <header className={IndexStyles.header}>
        <Image src={headerImage} alt="header" className={IndexStyles.header__image} />

        <div className={IndexStyles.header__content}>
            <Container>
                <div className={IndexStyles.header__contentInner}>
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
