import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from '../ContactForm';

describe('ContactForm snapshot', () => {
    it('renders correctly', () => {
        const component = <ContactForm />;
        const tree = render(component).asFragment();

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

    it('does not load recaptcha before interaction', () => {
        expect(container.querySelector('[data-testid="recaptcha"]')).toBeNull();
        expect(container.querySelector('[data-cy="contactRecaptchaPlaceholder"]')).not.toBeNull();
    });

    it('loads recaptcha on form focus', () => {
        fireEvent.focus(container.querySelector('#contactFirstName'));

        expect(container.querySelector('[data-testid="recaptcha"]')).not.toBeNull();
        expect(container.querySelector('[data-cy="contactRecaptchaPlaceholder"]')).toBeNull();
    });

    it('simulate unsuccessful form submit', () => {
        const form = container.querySelector('form');
        fireEvent.submit(form);

        expect(container.textContent).toContain('Please answer the captcha.');
        expect(container.querySelector('[data-testid="recaptcha"]')).not.toBeNull();
    });
});
