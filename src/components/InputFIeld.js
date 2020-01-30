import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const InputField = ({ controlId, name, errorDescription, onChange }) => (
    <Form.Group controlId={controlId}>
        <Form.Control name={name} type="text" required onChange={onChange} />
        <Form.Text className="text-muted">First name</Form.Text>
        <Form.Control.Feedback type="invalid">{errorDescription}</Form.Control.Feedback>
    </Form.Group>
);

InputField.propTypes = {
    controlId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    errorDescription: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default InputField;
