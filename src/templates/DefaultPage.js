import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Col, Container, Row } from 'react-bootstrap';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Content, { HTMLContent } from '../components/Content';
import SectionStyles from '../styles/components/Section.module.scss';

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
    <Layout meta={page.frontmatter.meta} currentPage={page.frontmatter.slug}>
        <DefaultPageTemplate {...page.frontmatter} content={page.html} contentComponent={HTMLContent} />
    </Layout>
);

DefaultPage.propTypes = {
    data: PropTypes.shape({
        page: PropTypes.object.isRequired,
    }).isRequired,
};

export default DefaultPage;

export const pageQuery = graphql`
    query DefaultPage($id: String!) {
        page: markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                slug
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
