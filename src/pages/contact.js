import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import SEO from '../components/seo';
import Layout from '../components/layout';
import ContactStyles from '../styles/pages/contact.module.scss';
import SectionStyles from '../styles/components/section.module.scss';
import Header from '../components/header';

export default ({ data }) => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

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
                            <Form
                                noValidate
                                validated={validated}
                                onSubmit={handleSubmit}
                                name="contact"
                                method="POST"
                                data-netlify-recaptcha="true"
                                data-netlify="true"
                            >
                                <Form.Label>Name *</Form.Label>
                                <Form.Row>
                                    <Col xs={12} lg={6}>
                                        <Form.Group controlId="contactFirstName">
                                            <Form.Control type="text" required />
                                            <Form.Text className="text-muted">First name</Form.Text>
                                            <Form.Control.Feedback type="invalid">
                                                Please enter your first name.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} lg={6}>
                                        <Form.Group controlId="contactLastName">
                                            <Form.Control type="text" required />
                                            <Form.Text className="text-muted">Last name</Form.Text>
                                            <Form.Control.Feedback type="invalid">
                                                Please enter your last name.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Form.Row>

                                <Form.Group controlId="contactEmail">
                                    <Form.Label>Email *</Form.Label>
                                    <Form.Control type="email" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a valid email address.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="contactSubject">
                                    <Form.Label>Subject *</Form.Label>
                                    <Form.Control type="text" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a subject.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="contactMessage">
                                    <Form.Label>Message *</Form.Label>
                                    <textarea className="form-control" id="contactMessage" rows="5" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your message.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <div data-netlify-recaptcha="true" />
                                <Button variant="primary" type="submit" className={ContactStyles.contactSubmitButton}>
                                    Submit
                                </Button>
                            </Form>
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
