import React from 'react';
import PropTypes from 'prop-types';
import SEO from './SEO';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({ children, meta, currentPage }) => (
    <main>
        <SEO {...meta} />
        <NavBar currentPage={currentPage} />
        {children}
        <Footer />
    </main>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    meta: PropTypes.object.isRequired,
    currentPage: PropTypes.string,
};

export default Layout;
