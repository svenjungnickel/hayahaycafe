import React from 'react';
import { graphql } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import SEO from '../components/seo';
import Layout from '../components/layout';
import ContactStyles from '../styles/pages/contact.module.scss';
import SectionStyles from '../styles/components/section.module.scss';
import Header from '../components/header';

export default ({ data }) => (
    <Layout currentPage="contact">
        <SEO title="Page two" keywords={[]} />

        <Header title="Contact" description="Feel free to contact us" header={data.header.childImageSharp.fluid} />

        <section className={SectionStyles.section}>
            <Container>
                <Row>
                    <Col></Col>
                </Row>
            </Container>
        </section>
    </Layout>
);

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
