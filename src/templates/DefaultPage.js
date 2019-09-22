import React from 'react';
import { graphql } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import SectionStyles from '../styles/components/section.module.scss';

// Export Template for use in CMS preview
export const DefaultPageTemplate = ({ title, subtitle, headerImage, body }) => (
    <>
        <Header title={title} subtitle={subtitle} headerImage={headerImage} />

        <section className={SectionStyles.section}>
            <Container>
                <Row>
                    <Col xs={12}>
                        <div dangerouslySetInnerHTML={{ __html: body }} />
                    </Col>
                </Row>
            </Container>
        </section>
    </>
);

// Export Default ContactPage for front-end
const DefaultPage = ({ data: { page } }) => (
    <Layout currentPage="/contact">
        <SEO
            title={page.frontmatter.title}
            keywords={(page.frontmatter.meta && page.frontmatter.meta.keywords) || []}
        />
        {/*<SEO meta={page.frontmatter.meta || false} title={page.frontmatter.title || false} />*/}

        <DefaultPageTemplate {...page.frontmatter} body={page.html} />
    </Layout>
);

export default DefaultPage;

export const pageQuery = graphql`
    query Page($id: String!) {
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
