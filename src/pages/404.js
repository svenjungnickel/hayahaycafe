import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import { graphql } from 'gatsby';
import SectionStyles from '../styles/components/section.module.scss';

const NotFoundPage = ({ data: { headerImage } }) => (
    <Layout currentPage="404">
        <SEO title="404: Not found" />
        <Header title="404" subtitle="Not found" headerImage={headerImage} />

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

NotFoundPage.propTypes = {
    data: PropTypes.shape({
        headerImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    }).isRequired,
};

export default NotFoundPage;

export const query = graphql`
    query {
        headerImage: file(relativePath: { eq: "default.jpg" }) {
            childImageSharp {
                fluid(maxHeight: 500) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
