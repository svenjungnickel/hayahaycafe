import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import IndexStyles from '../styles/components/header.module.scss';

const Header = ({ title, subtitle, headerImage }) => (
    <header className={IndexStyles.header}>
        {!!headerImage && !!headerImage.childImageSharp ? (
            <Img fluid={headerImage.childImageSharp.fluid} alt="header" className={IndexStyles.header__image} />
        ) : (
            <img src={headerImage} alt="header" className={IndexStyles.header__image} />
        )}

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
    header: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};

export default Header;
