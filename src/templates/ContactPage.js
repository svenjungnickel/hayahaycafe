import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Col, Container, Row } from 'react-bootstrap';
import Layout from '../components/Layout';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import Content, { HTMLContent } from '../components/Content';
import Separator from '../components/Separator';
import { section } from '../styles/components/Section.module.scss';

export const ContactPageTemplate = ({ title, subtitle, headerImage, content, contentComponent }) => {
    const PostContent = contentComponent || Content;

    return (
        <>
            <Header title={title} subtitle={subtitle} headerImage={headerImage} />

            <section className={section}>
                <Container>
                    {!!content && (
                        <Row>
                            <Col xs={12}>
                                <PostContent content={content} />
                                <Separator />
                            </Col>
                        </Row>
                    )}
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={8}>
                            <ContactForm />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

ContactPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    headerImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    content: PropTypes.node,
    contentComponent: PropTypes.func,
};

const ContactPage = ({ data: { page } }) => (
    <Layout meta={page.frontmatter.meta} currentPage={page.frontmatter.slug}>
        <ContactPageTemplate {...page.frontmatter} content={page.html} contentComponent={HTMLContent} />
    </Layout>
);

ContactPage.propTypes = {
    data: PropTypes.shape({
        page: PropTypes.object.isRequired,
    }).isRequired,
};

export default ContactPage;

export const pageQuery = graphql`
    query ContactPage($id: String!) {
        page: markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                slug
                title
                subtitle
                headerImage {
                    childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH)
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
