import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';
import { Link } from 'gatsby';
import { navBar__item } from '../../styles/components/NavBar/NavBar.module.scss';

const NavItem = ({ link, name, active }) => (
    <Nav.Item className={navBar__item}>
        <Link
            to={link}
            className={true === active ? 'nav-link active' : 'nav-link'}
            data-cy={`navBarLink${name.replace(/\s/g, '')}`}
        >
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
