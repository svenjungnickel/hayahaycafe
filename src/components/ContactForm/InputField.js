import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import ContactFormStyles from '../../styles/components/ContactForm/ContactForm.module.scss';

const InputField = ({ controlId, name, label, errorMessage, onChange, type, description, ariaLabel }) => (
    <Form.Group controlId={controlId} data-cy={controlId}>
        {'' !== label && <Form.Label>{label} *</Form.Label>}
        <Form.Control name={name} type={type} required onChange={onChange} aria-label={ariaLabel} />
        {description && (
            <Form.Text className={`text-muted ${ContactFormStyles.contactFormTextMuted}`}>{description}</Form.Text>
        )}
        <Form.Control.Feedback type="invalid">{errorMessage}</Form.Control.Feedback>
    </Form.Group>
);

InputField.defaultProps = {
    type: 'text',
};

InputField.propTypes = {
    controlId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['email', 'password', 'text']),
    description: PropTypes.string,
    ariaLabel: PropTypes.string,
};

export default InputField;
