import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Col, Container, Row } from 'react-bootstrap';
import Layout from '../components/layout';
import Header from '../components/header';
import ContactForm from '../components/contactForm';
import Content, { HTMLContent } from '../components/content';
import Address from '../components/Location';
import Separator from '../components/Separator';
import What3WordsAddress from '../components/What3WordsAddress';
import OpeningHours from '../components/OpeningHours';
import SectionStyles from '../styles/components/section.module.scss';

export const ContactPageTemplate = ({ title, subtitle, headerImage, content, contentComponent }) => {
    const PostContent = contentComponent || Content;

    return (
        <>
            <Header title={title} subtitle={subtitle} headerImage={headerImage} />

            <section className={SectionStyles.section}>
                <Container>
                    <Row>
                        {!!content && (
                            <Col xs={12}>
                                <PostContent content={content} />
                                <Separator />
                            </Col>
                        )}
                        <Col xs={12} sm={4}>
                            <Address />
                            <Separator />
                            <What3WordsAddress />
                            <Separator />
                            <OpeningHours />
                            <Separator className="d-block d-sm-none" />
                        </Col>
                        <Col xs={12} sm={8}>
                            <h2 className="d-block d-sm-none">Contact us</h2>
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
    <Layout meta={page.frontmatter.meta} currentPage="/contact">
        <ContactPageTemplate {...page.frontmatter} content={page.html} contentComponent={HTMLContent} />
    </Layout>
);

ContactPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }).isRequired,
};

export default ContactPage;

export const pageQuery = graphql`
    query ContactPage($id: String!) {
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
