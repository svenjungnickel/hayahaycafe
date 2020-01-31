import React from 'react';
import renderer from 'react-test-renderer';
import InputField from '../InputField';

describe('InputField', () => {
    it('renders without required controlId throws prop type error', () => {
        const renderInputField = () => {
            const name = 'name';
            const errorDescription = 'errorDescription';
            const onChange = () => {};

            const component = <InputField name={name} errorDescription={errorDescription} onChange={onChange} />;
            renderer.create(component);
        };

        expect(renderInputField).toThrowError('Warning: Failed prop type');
    });

    it('renders without required name throws prop type error', () => {
        const renderInputField = () => {
            const controlId = 'controlId';
            const errorDescription = 'errorDescription';
            const onChange = () => {};

            const component = (
                <InputField controlId={controlId} errorDescription={errorDescription} onChange={onChange} />
            );
            renderer.create(component);
        };

        expect(renderInputField).toThrowError('Warning: Failed prop type');
    });

    it('renders without required errorDescription throws prop type error', () => {
        const renderInputField = () => {
            const controlId = 'controlId';
            const name = 'name';
            const onChange = () => {};

            const component = <InputField controlId={controlId} name={name} onChange={onChange} />;
            renderer.create(component);
        };

        expect(renderInputField).toThrowError('Warning: Failed prop type');
    });

    it('renders without required onChange throws prop type error', () => {
        const renderInputField = () => {
            const controlId = 'controlId';
            const name = 'name';
            const errorDescription = 'errorDescription';

            const component = <InputField controlId={controlId} name={name} errorDescription={errorDescription} />;
            renderer.create(component);
        };

        expect(renderInputField).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid controlId throws prop type error', () => {
        const renderInputField = () => {
            const controlId = 123;
            const name = 'name';
            const errorDescription = 'errorDescription';
            const onChange = () => {};

            const component = (
                <InputField controlId={controlId} name={name} errorDescription={errorDescription} onChange={onChange} />
            );
            renderer.create(component);
        };

        expect(renderInputField).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid name throws prop type error', () => {
        const renderInputField = () => {
            const controlId = 'controlId';
            const name = 123;
            const errorDescription = 'errorDescription';
            const onChange = () => {};

            const component = (
                <InputField controlId={controlId} name={name} errorDescription={errorDescription} onChange={onChange} />
            );
            renderer.create(component);
        };

        expect(renderInputField).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid errorDescription throws prop type error', () => {
        const renderInputField = () => {
            const controlId = 'controlId';
            const name = 'name';
            const errorDescription = 123;
            const onChange = () => {};

            const component = (
                <InputField controlId={controlId} name={name} errorDescription={errorDescription} onChange={onChange} />
            );
            renderer.create(component);
        };

        expect(renderInputField).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid onChange throws prop type error', () => {
        const renderInputField = () => {
            const controlId = 'controlId';
            const name = 'name';
            const errorDescription = 'errorDescription';
            const onChange = {};

            const component = (
                <InputField controlId={controlId} name={name} errorDescription={errorDescription} onChange={onChange} />
            );
            renderer.create(component);
        };

        expect(renderInputField).toThrowError('Warning: Failed prop type');
    });

    it('renders correctly', () => {
        const controlId = 'controlId';
        const name = 'name';
        const errorDescription = 'errorDescription';
        const onChange = () => {};

        const component = (
            <InputField controlId={controlId} name={name} errorDescription={errorDescription} onChange={onChange} />
        );
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
