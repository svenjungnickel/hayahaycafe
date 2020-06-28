import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Col, Container, Row } from 'react-bootstrap';
import Layout from '../components/Layout';
import Image from '../components/Image';
import Content, { HTMLContent } from '../components/Content';
import Location from '../components/Location';
import Separator from '../components/Separator';
import OpeningHours from '../components/OpeningHours';
import What3WordsAddress from '../components/What3WordsAddress';
import StartPageStyles from '../styles/pages/Start.module.scss';
import SectionStyles from '../styles/components/Section.module.scss';

export const StartPageTemplate = ({ title, subtitle, headerImage, content, contentComponent }) => {
    const PostContent = contentComponent || Content;

    return (
        <>
            <header className={StartPageStyles.startHeader}>
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

            <section className={SectionStyles.section}>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <PostContent content={content} />
                            <Separator />
                        </Col>
                        <Col xs={12} sm={4} data-cy="startPageLocation">
                            <Location />
                        </Col>
                        <Col xs={12} sm={4} data-cy="startPageWhat3Words">
                            <Separator className="d-block d-sm-none" />
                            <What3WordsAddress />
                        </Col>
                        <Col xs={12} sm={4} data-cy="startPageOpeningHours">
                            <Separator className="d-block d-sm-none" />
                            <OpeningHours />
                        </Col>
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
};

const StartPage = ({ data: { page } }) => (
    <Layout meta={page.frontmatter.meta} currentPage={page.frontmatter.slug}>
        <StartPageTemplate {...page.frontmatter} content={page.html} contentComponent={HTMLContent} />
    </Layout>
);

StartPage.propTypes = {
    data: PropTypes.shape({
        page: PropTypes.object.isRequired,
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
                slug
                title
                subtitle
                headerImage {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid_withWebp
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
