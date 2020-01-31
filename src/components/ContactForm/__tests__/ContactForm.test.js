import React, { useState as useStateMock } from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import ContactForm from '../ContactForm';

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
}));

describe('ContactForm snapshot', () => {
    beforeEach(() => {
        useStateMock.mockImplementation(init => [init, jest.fn()]);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders correctly', () => {
        const component = <ContactForm />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});

describe('ContactForm events', () => {
    let ContactFormComponent;
    const setStateMock = jest.fn();
    const setValidatedMock = jest.fn();
    const setRecaptchaErrorMock = jest.fn();
    const setSuccessMock = jest.fn();

    beforeEach(() => {
        useStateMock
            .mockImplementationOnce(init => [init, setValidatedMock])
            .mockImplementationOnce(init => [init, setStateMock])
            .mockImplementationOnce(init => [init, setRecaptchaErrorMock])
            .mockImplementationOnce(init => [init, setSuccessMock]);
        ContactFormComponent = mount(<ContactForm />);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('simulate change input field', () => {
        const InputField = ContactFormComponent.find('#contactFirstName');
        InputField.simulate('change');

        expect(setValidatedMock).toHaveBeenCalledTimes(0);
        expect(setStateMock).toHaveBeenCalledTimes(1);
        expect(setStateMock).toHaveBeenCalledWith({ firstName: '' });
        expect(setRecaptchaErrorMock).toHaveBeenCalledTimes(0);
        expect(setSuccessMock).toHaveBeenCalledTimes(0);
    });

    it('simulate change text area', () => {
        const TextArea = ContactFormComponent.find('#contactMessage');
        TextArea.simulate('change');

        expect(setValidatedMock).toHaveBeenCalledTimes(0);
        expect(setStateMock).toHaveBeenCalledTimes(1);
        expect(setStateMock).toHaveBeenCalledWith({ message: '' });
        expect(setRecaptchaErrorMock).toHaveBeenCalledTimes(0);
        expect(setSuccessMock).toHaveBeenCalledTimes(0);
    });

    // @TODO finish skipped tests
    it.skip('simulate change unsolved recaptcha', () => {
        const Recaptcha = ContactFormComponent.find('#contactRecaptcha').first();
        Recaptcha.simulate('click');

        expect(setValidatedMock).toHaveBeenCalledTimes(0);
        expect(setStateMock).toHaveBeenCalledTimes(0);
        expect(setRecaptchaErrorMock).toHaveBeenCalledTimes(1);
        expect(setRecaptchaErrorMock).toHaveBeenCalledWith(false);
        expect(setSuccessMock).toHaveBeenCalledTimes(0);
    });

    it('simulate unsuccessful form submit', () => {
        const SubmitButton = ContactFormComponent.find('button[type="submit"]');
        SubmitButton.simulate('submit');

        expect(setValidatedMock).toHaveBeenCalledTimes(1);
        expect(setValidatedMock).toHaveBeenCalledWith(true);
        expect(setStateMock).toHaveBeenCalledTimes(0);
        expect(setRecaptchaErrorMock).toHaveBeenCalledTimes(1);
        expect(setSuccessMock).toHaveBeenCalledTimes(0);
    });

    it.skip('simulate successful form submit', () => {
        useStateMock
            .mockImplementationOnce(init => [init, setValidatedMock])
            .mockImplementationOnce(init => [init, setStateMock])
            .mockImplementationOnce(init => [init, setRecaptchaErrorMock])
            .mockImplementationOnce(init => [init, setSuccessMock])
            .mockReturnValue(true);
        // mock setRecaptchaErrorMock return to false
        //...
        ContactFormComponent = mount(<ContactForm />);

        const SubmitButton = ContactFormComponent.find('button[type="submit"]');
        SubmitButton.simulate('submit');
        // validate state mock calls and params
        //...
    });
});
