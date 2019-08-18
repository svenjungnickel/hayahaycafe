import React, { useState, createRef } from 'react';
import { Alert, Button, Col, Form } from 'react-bootstrap';
import Recaptcha from 'react-google-recaptcha';
import Fade from 'react-reveal/Fade';
import Styles from '../styles/components/contactForm.module.scss';

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;
const CONTACT_FORM_FADE_UP_DURATION = 400;
const SUCCESS_MESSAGE_FADE_IN_DURATION = 200;

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
}

export default () => {
    const [validated, setValidated] = useState(false);
    const [state, setState] = useState({});
    const [recaptchaError, setRecaptchaError] = useState(false);
    const [success, setSuccess] = useState(false);
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
            .then(() => {
                console.log('success');
                setSuccess(true);
            })
            .catch(error => alert(error));
    };

    return (
        <div className={Styles.contactForm}>
            <Fade top collapse when={false === success} duration={CONTACT_FORM_FADE_UP_DURATION} unmountOnExit={true}>
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
                                <Form.Control name="firstName" type="text" required onChange={handleChange} />
                                <Form.Text className="text-muted">First name</Form.Text>
                                <Form.Control.Feedback type="invalid">
                                    Please enter your first name.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col xs={12} lg={6}>
                            <Form.Group controlId="contactLastName">
                                <Form.Control name="lastName" type="text" required onChange={handleChange} />
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
                        <Form.Control.Feedback type="invalid">Please enter a subject.</Form.Control.Feedback>
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
                        <Form.Control.Feedback type="invalid">Please enter your message.</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="contactRecaptcha">
                        <Recaptcha
                            id="contactRecaptcha"
                            ref={recaptchaRef}
                            sitekey={RECAPTCHA_KEY}
                            onChange={handleRecaptcha}
                            className={Styles.contactFormReCaptcha}
                        />
                        {true === recaptchaError && (
                            <div className="invalid-feedback" style={{ display: 'block' }}>
                                Please answer the captcha.
                            </div>
                        )}
                    </Form.Group>

                    <Button variant="primary" type="submit" className={Styles.contactFormSubmitButton}>
                        Submit
                    </Button>
                </Form>
            </Fade>
            <Fade
                collapse
                when={success}
                duration={SUCCESS_MESSAGE_FADE_IN_DURATION}
                delay={CONTACT_FORM_FADE_UP_DURATION}
            >
                <Alert variant="success" className={Styles.contactFormSuccess}>
                    <p>{`Thank you for your message. We're getting in touch with you soon.`}</p>
                </Alert>
            </Fade>
        </div>
    );
};
