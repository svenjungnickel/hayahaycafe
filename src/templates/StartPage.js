import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Col, Container, Row } from 'react-bootstrap';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Image from '../components/image';
import Gallery from '../components/gallery';
import Content, { HTMLContent } from '../components/content';
import IndexStyles from '../styles/pages/index.module.scss';
import SectionStyles from '../styles/components/section.module.scss';

export const StartPageTemplate = ({
    title,
    subtitle,
    headerImage,
    content,
    contentComponent,
    location,
    openingHours,
    gallery,
}) => {
    const PostContent = contentComponent || Content;

    return (
        <>
            <header className={IndexStyles.indexHeader} id="home">
                <Image src={headerImage} alt={title} className={IndexStyles.indexHeader__image} />

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
                        <Col xs={12} sm={9} lg={8}>
                            <PostContent content={content} />
                        </Col>
                        <Col xs={12} sm={1} lg={1}>
                            &nbsp;
                        </Col>
                        <Col xs={12} sm={2} lg={3}>
                            <h4>Location</h4>
                            <PostContent content={location} />
                            <p>&nbsp;</p>
                            <h4>Hours</h4>
                            <PostContent content={openingHours} />
                        </Col>
                    </Row>
                </Container>
            </section>

            <Gallery images={gallery} />
        </>
    );
};

StartPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    headerImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    location: PropTypes.node.isRequired,
    openingHours: PropTypes.node.isRequired,
    gallery: PropTypes.array,
};

const StartPage = ({ data: { page } }) => (
    <Layout currentPage="/">
        <SEO
            title={page.frontmatter.title}
            keywords={(page.frontmatter.meta && page.frontmatter.meta.keywords) || []}
        />
        {/*<SEO meta={page.frontmatter.meta || false} />*/}

        <StartPageTemplate {...page.frontmatter} content={page.html} contentComponent={HTMLContent} />
    </Layout>
);

StartPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
};

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
                headerImage {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                    publicURL
                }
                gallery {
                    src {
                        childImageSharp {
                            fluid(maxWidth: 1600, maxHeight: 800) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                        publicURL
                    }
                    alt
                    title
                }
            }
        }
    }
`;
