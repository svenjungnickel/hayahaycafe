import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/Layout';
import Header from '../components/Header';
import SectionStyles from '../styles/components/Section.module.scss';

const meta = {
    title: '404: Not found',
    description: "You just hit a route that doesn't exist.",
};

const NotFoundPage = ({ data: { headerImage } }) => (
    <Layout meta={meta}>
        <Header headerImage={headerImage} title="404" />

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
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`;
