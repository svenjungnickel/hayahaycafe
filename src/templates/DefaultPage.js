import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Col, Container, Row } from 'react-bootstrap';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import Content, { HTMLContent } from '../components/content';
import SectionStyles from '../styles/components/section.module.scss';

export const DefaultPageTemplate = ({ title, subtitle, headerImage, content, contentComponent }) => {
    const PostContent = contentComponent || Content;

    return (
        <>
            <Header title={title} subtitle={subtitle} headerImage={headerImage} />

            <section className={SectionStyles.section}>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <PostContent content={content} />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

DefaultPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    headerImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
};

const DefaultPage = ({ data: { page } }) => (
    <Layout currentPage="/contact">
        <SEO
            title={page.frontmatter.title}
            keywords={(page.frontmatter.meta && page.frontmatter.meta.keywords) || []}
        />
        {/*<SEO meta={page.frontmatter.meta || false} title={page.frontmatter.title || false} />*/}

        <DefaultPageTemplate {...page.frontmatter} content={page.html} contentComponent={HTMLContent} />
    </Layout>
);

DefaultPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
};

export default DefaultPage;

export const pageQuery = graphql`
    query DefaultPage($id: String!) {
        page: markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
                subtitle
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
    }
`;
