import React from 'react';
import renderer from 'react-test-renderer';
import InputField from '../InputField';

describe('InputField', () => {
    it('renders with required parameters', () => {
        const controlId = 'controlId';
        const name = 'name';
        const label = 'label';
        const errorMessage = 'errorMessage';
        const onChange = () => {};

        const component = (
            <InputField
                controlId={controlId}
                name={name}
                label={label}
                errorMessage={errorMessage}
                onChange={onChange}
            />
        );
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders with description', () => {
        const controlId = 'controlId';
        const name = 'name';
        const label = 'label';
        const errorMessage = 'errorMessage';
        const onChange = () => {};
        const description = 'description';

        const component = (
            <InputField
                controlId={controlId}
                name={name}
                label={label}
                errorMessage={errorMessage}
                onChange={onChange}
                description={description}
            />
        );
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders with empty label and filled ariaLabel', () => {
        const controlId = 'controlId';
        const name = 'name';
        const label = '';
        const errorMessage = 'errorMessage';
        const onChange = () => {};
        const ariaLabel = 'ariaLabel';

        const component = (
            <InputField
                controlId={controlId}
                name={name}
                label={label}
                errorMessage={errorMessage}
                onChange={onChange}
                ariaLabel={ariaLabel}
            />
        );
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
