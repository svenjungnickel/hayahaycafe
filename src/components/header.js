import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import IndexStyles from '../styles/components/header.module.scss';

const Header = ({ header, title, subtitle }) => (
    <header className={IndexStyles.header}>
        <Img fluid={header} alt="header" className={IndexStyles.header__image} />

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
    header: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};

export default Header;
