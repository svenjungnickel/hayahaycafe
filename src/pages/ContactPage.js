import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { HTMLContent } from '../components/content';
import ContactPageTemplate from '../templates/ContactPageTemplate';

const ContactPage = ({ data: { page, what3wordsIcon } }) => (
    <Layout currentPage="/contact">
        <SEO
            title={page.frontmatter.title}
            keywords={(page.frontmatter.meta && page.frontmatter.meta.keywords) || []}
        />
        {/*<SEO meta={page.frontmatter.meta || false} title={page.frontmatter.title || false} />*/}

        <ContactPageTemplate
            what3wordsIcon={what3wordsIcon}
            {...page.frontmatter}
            content={page.html}
            contentComponent={HTMLContent}
        />
    </Layout>
);

ContactPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
        what3wordsIcon: PropTypes.string,
    }),
};

export default ContactPage;

export const pageQuery = graphql`
    query ContactPage($id: String!) {
        page: markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
                subtitle
                what3WordsAddress
                headerImage {
                    childImageSharp {
                        fluid(maxHeight: 500) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                    publicURL
                }
            }
        }
        what3wordsIcon: file(relativePath: { eq: "what3words-icon.png" }) {
            childImageSharp {
                fixed(width: 80, height: 80) {
                    ...GatsbyImageSharpFixed
                }
            }
            publicURL
        }
    }
`;
