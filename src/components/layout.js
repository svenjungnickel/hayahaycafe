import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import NavBar from './navBar';
import Footer from './footer';

const Layout = ({ children, currentPage }) => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        address
                        socialMedia {
                            type
                            link
                        }
                    }
                }
            }
        `}
        render={data => (
            <main>
                <NavBar currentPage={currentPage} />
                {children}
                <Footer siteMetadata={data.site.siteMetadata} />
            </main>
        )}
    />
);

export default Layout;
