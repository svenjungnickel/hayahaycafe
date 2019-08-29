import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Container, Row, Col } from 'react-bootstrap';
import SEO from '../components/seo';
import Layout from '../components/layout';
import IndexStyles from '../styles/pages/index.module.scss';
import SectionStyles from '../styles/components/section.module.scss';

// Export Template for use in CMS preview
export const StartPageTemplate = ({ title, subtitle, featuredImage, body, location, openingHours }) => (
    <>
        <header className={IndexStyles.indexHeader} id="home">
            <Img fluid={featuredImage.childImageSharp.fluid} alt={title} className={IndexStyles.indexHeader__image} />

            <div className={IndexStyles.indexHeader__content}>
                <Container>
                    <div className={IndexStyles.indexHeader__contentInner}>
                        <h1 className="display-1">{title}</h1>
                        <p className="lead">{subtitle}</p>
                    </div>
                </Container>
            </div>
        </header>

        <section className={SectionStyles.section} id="cafe">
            <Container>
                <Row>
                    <Col xs={12} sm={9} lg={8} dangerouslySetInnerHTML={{ __html: body }} />
                    <Col xs={12} sm={1} lg={1}>
                        &nbsp;
                    </Col>
                    <Col xs={12} sm={2} lg={3}>
                        <h4>Location</h4>
                        <p dangerouslySetInnerHTML={{ __html: location }} />
                        <p>&nbsp;</p>
                        <h4>Hours</h4>
                        <p dangerouslySetInnerHTML={{ __html: openingHours }} />
                    </Col>
                </Row>
            </Container>
        </section>

        <section className={SectionStyles.section} id="menu">
            <div className="container">
                <h2 className="display-5 text-center">Menu</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <img src="https://picsum.photos/200/300" alt="lorem ipsum" />
            </div>
        </section>
    </>
);

// Export Default HomePage for front-end
const StartPage = ({ data: { page } }) => (
    <Layout currentPage="/">
        <SEO
            title={page.frontmatter.title}
            keywords={(page.frontmatter.meta && page.frontmatter.meta.keywords) || []}
        />
        {/*<SEO meta={page.frontmatter.meta || false} />*/}

        <StartPageTemplate {...page} {...page.frontmatter} body={page.html} />
    </Layout>
);

export default StartPage;

export const pageQuery = graphql`
    ## Query for HomePage data
    ## Use GraphiQL interface (http://localhost:8000/___graphql)
    ## $id is processed via gatsby-node.js
    ## query name must be unique to this file
    query IndexPage($id: String!) {
        page: markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
                subtitle
                location
                openingHours
                featuredImage {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`;
