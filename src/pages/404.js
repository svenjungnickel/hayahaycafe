import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import { graphql } from 'gatsby';
import SectionStyles from '../styles/components/section.module.scss';

export default ({ data }) => (
    <Layout currentPage="404">
        <SEO title="404: Not found" />
        <Header title="404" description="Not found" header={data.header.childImageSharp.fluid} />

        <section className={SectionStyles.section}>
            <Container>
                <Row>
                    <Col>
                        <h1>404: not found</h1>
                        <p>You just hit a route that doesn&#39;t exist.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    </Layout>
);

export const query = graphql`
    query {
        header: file(relativePath: { eq: "header/default.jpg" }) {
            childImageSharp {
                fluid(maxHeight: 500) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
