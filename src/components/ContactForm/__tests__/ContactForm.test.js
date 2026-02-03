import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from '../ContactForm';

describe('ContactForm snapshot', () => {
    it('renders correctly', () => {
        const component = <ContactForm />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});

describe('ContactForm events', () => {
    let container;

    beforeEach(() => {
        ({ container } = render(<ContactForm />));
    });

    it('simulate change input field', () => {
        const inputField = container.querySelector('#contactFirstName');
        fireEvent.change(inputField, { target: { name: 'firstName', value: 'Sven' } });

        expect(inputField.value).toBe('Sven');
    });

    it('simulate change text area', () => {
        const textArea = container.querySelector('#contactMessage');
        fireEvent.change(textArea, { target: { name: 'message', value: 'Hello' } });

        expect(textArea.value).toBe('Hello');
    });

    it('simulate unsuccessful form submit', () => {
        const form = container.querySelector('form');
        fireEvent.submit(form);

        expect(container.textContent).toContain('Please answer the captcha.');
    });
});
