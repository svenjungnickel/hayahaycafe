import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import SEO from './seo';
import NavBar from './navBar';
import Footer from './footer';

const Layout = ({ children, meta, currentPage }) => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        socialMedia {
                            type
                            link
                        }
                    }
                }
                globalSettings: settingsYaml {
                    address
                }
            }
        `}
        render={data => (
            <main>
                <SEO {...meta} />
                <NavBar currentPage={currentPage} />
                {children}
                <Footer socialMedia={data.site.siteMetadata.socialMedia} address={data.globalSettings.address} />
            </main>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    meta: PropTypes.object.isRequired,
    currentPage: PropTypes.string,
};

export default Layout;
