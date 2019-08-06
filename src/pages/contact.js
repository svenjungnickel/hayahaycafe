import React, { useState, createRef } from 'react';
import { graphql, navigate } from 'gatsby';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Recaptcha from 'react-google-recaptcha';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import ContactStyles from '../styles/pages/contact.module.scss';
import SectionStyles from '../styles/components/section.module.scss';

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
}

export default ({ data }) => {
    const [validated, setValidated] = useState(false);
    const [state, setState] = useState({});
    const [recaptchaError, setRecaptchaError] = useState(false);
    const recaptchaRef = createRef();

    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleRecaptcha = () => {
        setRecaptchaError(false);
    };

    const handleSubmit = event => {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);

        const recaptchaValue = recaptchaRef.current.getValue() || false;
        if (false === recaptchaValue) {
            setRecaptchaError(true);
            return;
        }

        if (event.currentTarget.checkValidity() === false) {
            return;
        }

        const form = event.target;
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                'g-recaptcha-response': recaptchaValue,
                ...state,
            }),
        })
            .then(() => navigate(form.getAttribute('action')))
            .catch(error => alert(error));
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
                                action="/thanks"
                                data-netlify="true"
                                data-netlify-recaptcha="true"
                            >
                                <Form.Label>Name *</Form.Label>
                                <Form.Row>
                                    <Col xs={12} lg={6}>
                                        <Form.Group controlId="contactFirstName">
                                            <Form.Control
                                                name="firstName"
                                                type="text"
                                                required
                                                onChange={handleChange}
                                            />
                                            <Form.Text className="text-muted">First name</Form.Text>
                                            <Form.Control.Feedback type="invalid">
                                                Please enter your first name.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} lg={6}>
                                        <Form.Group controlId="contactLastName">
                                            <Form.Control
                                                name="lastName"
                                                type="text"
                                                required
                                                onChange={handleChange}
                                            />
                                            <Form.Text className="text-muted">Last name</Form.Text>
                                            <Form.Control.Feedback type="invalid">
                                                Please enter your last name.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Form.Row>

                                <Form.Group controlId="contactEmail">
                                    <Form.Label>Email *</Form.Label>
                                    <Form.Control name="email" type="email" required onChange={handleChange} />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a valid email address.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="contactSubject">
                                    <Form.Label>Subject *</Form.Label>
                                    <Form.Control name="subject" type="text" required onChange={handleChange} />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a subject.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="contactMessage">
                                    <Form.Label>Message *</Form.Label>
                                    <textarea
                                        name="message"
                                        className="form-control"
                                        id="contactMessage"
                                        rows="5"
                                        required
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your message.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="contactRecaptcha">
                                    <Recaptcha
                                        id="contactRecaptcha"
                                        ref={recaptchaRef}
                                        sitekey={RECAPTCHA_KEY}
                                        onChange={handleRecaptcha}
                                    />
                                    {true === recaptchaError && (
                                        <div className="invalid-feedback" style={{ display: 'block' }}>
                                            Please answer the captcha.
                                        </div>
                                    )}
                                </Form.Group>

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
