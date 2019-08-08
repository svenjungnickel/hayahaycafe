import React from 'react';
import { graphql } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import ContactForm from '../components/contactForm';
import SectionStyles from '../styles/components/section.module.scss';

export default ({ data }) => {
    return (
        <Layout currentPage="contact">
            <SEO title="Page two" keywords={[]} />
            <Header title="Contact" description="Feel free to contact us" header={data.header.childImageSharp.fluid} />

            <section className={SectionStyles.section}>
                <Container>
                    <Row>
                        <Col xs={12} sm={4}>
                            <h2 className="display-5">{data.site.siteMetadata.title}</h2>
                            <p>&nbsp;</p>
                            <p>
                                Bug-ong, Mambajao
                                <br />
                                Camiguin Island
                                <br />
                                9100
                                <br />
                                Philippines
                            </p>
                            <p>&nbsp;</p>
                        </Col>
                        <Col xs={12} sm={8}>
                            <ContactForm />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Layout>
    );
};

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
                description
            }
        }
        header: file(relativePath: { eq: "header/default.jpg" }) {
            childImageSharp {
                # Specify the image processing specifications right in the query.
                fluid(maxHeight: 500) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
