import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Image from './Image';
import NavBarStyles from '../styles/components/NavBar.module.scss';

const Logo = ({ logo, className }) => (
    <div className={className}>
        <Link to="/">
            <Image src={logo.src} alt="Logo" className={NavBarStyles.navBar__logo} />
        </Link>
    </div>
);

Logo.propTypes = {
    logo: PropTypes.shape({
        src: PropTypes.string.isRequired,
    }).isRequired,
    className: PropTypes.string.isRequired,
};

export default Logo;
