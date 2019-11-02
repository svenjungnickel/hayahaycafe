import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import Image from './Image';
import HeaderStyles from '../styles/components/Header.module.scss';

const Header = ({ headerImage, title, subtitle }) => (
    <header className={HeaderStyles.header}>
        <Image src={headerImage} alt="header" className={HeaderStyles.header__image} />

        <div className={HeaderStyles.header__content}>
            <Container>
                <div className={HeaderStyles.header__contentInner}>
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
