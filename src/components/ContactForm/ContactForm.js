import React, { useState, createRef } from 'react';
import { Alert, Button, Row, Col, Form } from 'react-bootstrap';
import Recaptcha from 'react-google-recaptcha';
import Fade from 'react-reveal/Fade';
import useDarkMode from 'use-dark-mode';
import InputField from './InputField';
import Encode from './Encode';
import {
    contactForm,
    contactFormReCaptcha,
    contactFormSubmitButton,
    contactFormSuccess,
} from '../../styles/components/ContactForm/ContactForm.module.scss';

const RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY;
const CONTACT_FORM_FADE_UP_DURATION = 400;
const SUCCESS_MESSAGE_FADE_IN_DURATION = 200;

const ContactForm = () => {
    const [validated, setValidated] = useState(false);
    const [state, setState] = useState({});
    const [recaptchaError, setRecaptchaError] = useState(false);
    const [success, setSuccess] = useState(false);
    const darkMode = useDarkMode(false);
    const recaptchaRef = createRef();

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleRecaptcha = () => {
        setRecaptchaError(false);
    };

    const handleSubmit = (event) => {
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
            body: Encode({
                'form-name': form.getAttribute('name'),
                'g-recaptcha-response': recaptchaValue,
                ...state,
            }),
        })
            .then(() => {
                setSuccess(true);
            })
            .catch((error) => alert(error));
    };

    return (
        <div className={contactForm}>
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
                    data-cy="contactForm"
                >
                    <Form.Label htmlFor="contactFirstName">Name *</Form.Label>
                    <Row>
                        <Col xs={12} lg={6}>
                            <InputField
                                controlId="contactFirstName"
                                name="firstName"
                                label=""
                                errorMessage="Please enter your first name."
                                onChange={handleChange}
                                description="First name"
                                ariaLabel="First name"
                            />
                        </Col>
                        <Col xs={12} lg={6}>
                            <InputField
                                controlId="contactLastName"
                                name="lastName"
                                label=""
                                errorMessage="Please enter your last name."
                                onChange={handleChange}
                                description="Last name"
                                ariaLabel="Last name"
                            />
                        </Col>
                    </Row>

                    <InputField
                        controlId="contactEmail"
                        name="email"
                        label="Email"
                        errorMessage="Please enter a valid email address."
                        onChange={handleChange}
                        type="email"
                    />

                    <InputField
                        controlId="contactSubject"
                        name="subject"
                        label="Subject"
                        errorMessage="Please enter a subject."
                        onChange={handleChange}
                    />

                    <Form.Group className="mb-3" controlId="contactMessage" data-cy="contactMessage">
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

                    <Form.Group className="mb-3" controlId="contactRecaptcha" data-cy="contactRecaptcha">
                        <Recaptcha
                            id="contactRecaptcha"
                            ref={recaptchaRef}
                            sitekey={RECAPTCHA_KEY}
                            onChange={handleRecaptcha}
                            theme={true === darkMode.value ? 'dark' : 'light'}
                            className={contactFormReCaptcha}
                        />
                        {true === recaptchaError && (
                            <div className="invalid-feedback" style={{ display: 'block' }}>
                                Please answer the captcha.
                            </div>
                        )}
                    </Form.Group>

                    <Button variant="primary" type="submit" className={contactFormSubmitButton}>
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
                <Alert variant="success" className={contactFormSuccess} data-cy="contactFormSuccess">
                    <p>{"Thank you for your message. We're getting in touch with you soon."}</p>
                </Alert>
            </Fade>
        </div>
    );
};

export default ContactForm;
