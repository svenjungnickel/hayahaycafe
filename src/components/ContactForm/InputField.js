import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const InputField = ({ controlId, name, label, errorMessage, onChange, description, ariaLabel }) => (
    <Form.Group controlId={controlId}>
        {'' !== label && <Form.Label>{label} *</Form.Label>}
        <Form.Control name={name} type="text" required onChange={onChange} aria-label={ariaLabel} />
        {description && <Form.Text className="text-muted">{description}</Form.Text>}
        <Form.Control.Feedback type="invalid">{errorMessage}</Form.Control.Feedback>
    </Form.Group>
);

InputField.propTypes = {
    controlId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    description: PropTypes.string,
    ariaLabel: PropTypes.string,
};

export default InputField;
