import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';
import { Link } from 'gatsby';
import NavBarStyles from '../../styles/components/NavBar.module.scss';

const NavItem = ({ link, name, active }) => (
    <Nav.Item className={NavBarStyles.navBar__item}>
        <Link to={link} className={true === active ? 'nav-link active' : 'nav-link'}>
            {name}
        </Link>
    </Nav.Item>
);

NavItem.defaultProps = {
    active: false,
};

NavItem.propTypes = {
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    active: PropTypes.bool,
};

export default NavItem;
