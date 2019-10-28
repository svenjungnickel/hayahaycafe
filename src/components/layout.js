import React from 'react';
import PropTypes from 'prop-types';
import SEO from './seo';
import NavBar from './navBar';
import Footer from './footer';

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
