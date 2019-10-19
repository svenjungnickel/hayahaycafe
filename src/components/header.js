import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import Image from './image';
import IndexStyles from '../styles/components/header.module.scss';

const Header = ({ title, subtitle, headerImage }) => (
    <header className={IndexStyles.header}>
        <Image src={headerImage} alt="header" className={IndexStyles.header__image} />

        <div className={IndexStyles.header__content}>
            <Container>
                <div className={IndexStyles.header__contentInner}>
                    <h1 className="display-1">{title}</h1>
                    <p className="lead">{subtitle}</p>
                </div>
            </Container>
        </div>
    </header>
);

Header.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    headerImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
};

export default Header;
