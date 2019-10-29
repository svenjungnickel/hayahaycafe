import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Col, Container, Row } from 'react-bootstrap';
import Layout from '../components/layout';
import Image from '../components/image';
import Gallery from '../components/gallery';
import Content, { HTMLContent } from '../components/content';
import Address from '../components/Location';
import Separator from '../components/Separator';
import OpeningHours from '../components/OpeningHours';
import What3WordsAddress from '../components/What3WordsAddress';
import StartPageStyles from '../styles/pages/start.module.scss';
import SectionStyles from '../styles/components/section.module.scss';

export const StartPageTemplate = ({ title, subtitle, headerImage, content, contentComponent, gallery }) => {
    const PostContent = contentComponent || Content;

    return (
        <>
            <header className={StartPageStyles.startHeader} id="home">
                <Image src={headerImage} alt={title} className={StartPageStyles.startHeader__image} />

                <div className={StartPageStyles.startHeader__content}>
                    <Container>
                        <div className={StartPageStyles.startHeader__contentInner}>
                            <h1 className="display-1">{title}</h1>
                            <p className="lead">{subtitle}</p>
                        </div>
                    </Container>
                </div>
            </header>

            <section className={SectionStyles.section} id="cafe">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <PostContent content={content} />
                            <Separator />
                        </Col>
                        <Col xs={12} sm={4}>
                            <Address />
                        </Col>
                        <Col xs={12} sm={4}>
                            <Separator className="d-block d-sm-none" />
                            <What3WordsAddress />
                        </Col>
                        <Col xs={12} sm={4}>
                            <Separator className="d-block d-sm-none" />
                            <OpeningHours />
                        </Col>
                        {gallery && gallery.length > 0 && (
                            <>
                                <Col xs={12}>
                                    <Separator />
                                </Col>
                                <div className="container">
                                    <h2 className="display-5 text-center">Gallery</h2>
                                    <Gallery images={gallery} />
                                </div>
                            </>
                        )}
                    </Row>
                </Container>
            </section>
        </>
    );
};

StartPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    headerImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    gallery: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const StartPage = ({ data: { page } }) => (
    <Layout meta={page.frontmatter.meta} currentPage="/">
        <StartPageTemplate {...page.frontmatter} content={page.html} contentComponent={HTMLContent} />
    </Layout>
);

StartPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }).isRequired,
};

export default StartPage;

export const pageQuery = graphql`
    ## Query for HomePage data
    ## Use GraphiQL interface (http://localhost:8000/___graphql)
    ## $id is processed via gatsby-node.js
    ## query name must be unique to this file
    query StartPage($id: String!) {
        page: markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
                subtitle
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
                meta {
                    title
                    description
                    keywords
                }
            }
        }
    }
`;
