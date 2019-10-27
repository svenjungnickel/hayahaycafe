import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Col, Container, Row } from 'react-bootstrap';
import Layout from '../components/layout';
import Header from '../components/header';
import Content, { HTMLContent } from '../components/content';
import SectionStyles from '../styles/components/section.module.scss';

export const DefaultPageTemplate = ({ title, subtitle, headerImage, content, contentComponent }) => {
    const PostContent = contentComponent || Content;

    return (
        <>
            <Header headerImage={headerImage} title={title} subtitle={subtitle} />

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
    subtitle: PropTypes.string,
    headerImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
};

const DefaultPage = ({ data: { page } }) => (
    <Layout meta={page.frontmatter.meta}>
        <DefaultPageTemplate {...page.frontmatter} content={page.html} contentComponent={HTMLContent} />
    </Layout>
);

DefaultPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }).isRequired,
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
                meta {
                    title
                    description
                    keywords
                }
            }
        }
    }
`;
