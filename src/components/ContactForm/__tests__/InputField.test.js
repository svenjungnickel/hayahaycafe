import React from 'react';
import renderer from 'react-test-renderer';
import InputField from '../InputField';

describe('InputField', () => {
    it('renders without required controlId throws prop type error', () => {
        const renderInputField = () => {
            const name = 'name';
            const label = 'label';
            const errorMessage = 'errorMessage';
            const onChange = () => {};

            const component = <InputField name={name} label={label} errorMessage={errorMessage} onChange={onChange} />;
            renderer.create(component);
        };

        expect(renderInputField).toThrowError('Warning: Failed prop type');
    });

    it('renders without required name throws prop type error', () => {
        const renderInputField = () => {
            const controlId = 'controlId';
            const label = 'label';
            const errorMessage = 'errorMessage';
            const onChange = () => {};

            const component = (
                <InputField controlId={controlId} label={label} errorMessage={errorMessage} onChange={onChange} />
            );
            renderer.create(component);
        };

        expect(renderInputField).toThrowError('Warning: Failed prop type');
    });

    it('renders without required label throws prop type error', () => {
        const renderInputField = () => {
            const controlId = 'controlId';
            const name = 'name';
            const errorMessage = 'errorMessage';
            const onChange = () => {};

            const component = (
                <InputField controlId={controlId} name={name} errorMessage={errorMessage} onChange={onChange} />
            );
            renderer.create(component);
        };

        expect(renderInputField).toThrowError('Warning: Failed prop type');
    });

    it('renders without required errorMessage throws prop type error', () => {
        const renderInputField = () => {
            const controlId = 'controlId';
            const name = 'name';
            const label = 'label';
            const onChange = () => {};

            const component = <InputField controlId={controlId} name={name} label={label} onChange={onChange} />;
            renderer.create(component);
        };

        expect(renderInputField).toThrowError('Warning: Failed prop type');
    });

    it('renders without required onChange throws prop type error', () => {
        const renderInputField = () => {
            const controlId = 'controlId';
            const name = 'name';
            const label = 'label';
            const errorMessage = 'errorMessage';

            const component = (
                <InputField controlId={controlId} name={name} label={label} errorMessage={errorMessage} />
            );
            renderer.create(component);
        };

        expect(renderInputField).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid controlId throws prop type error', () => {
        const renderInputField = () => {
            const controlId = 123;
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
            renderer.create(component);
        };

        expect(renderInputField).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid name throws prop type error', () => {
        const renderInputField = () => {
            const controlId = 'controlId';
            const name = 123;
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
            renderer.create(component);
        };

        expect(renderInputField).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid label throws prop type error', () => {
        const renderInputField = () => {
            const controlId = 'controlId';
            const name = 'name';
            const label = 123;
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
            renderer.create(component);
        };

        expect(renderInputField).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid errorMessage throws prop type error', () => {
        const renderInputField = () => {
            const controlId = 'controlId';
            const name = 'name';
            const label = 'label';
            const errorMessage = 123;
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
            renderer.create(component);
        };

        expect(renderInputField).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid onChange throws prop type error', () => {
        const renderInputField = () => {
            const controlId = 'controlId';
            const name = 'name';
            const label = 'label';
            const errorMessage = 'errorMessage';
            const onChange = {};

            const component = (
                <InputField
                    controlId={controlId}
                    name={name}
                    label={label}
                    errorMessage={errorMessage}
                    onChange={onChange}
                />
            );
            renderer.create(component);
        };

        expect(renderInputField).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid type throws prop type error', () => {
        const renderInputField = () => {
            const controlId = 'controlId';
            const name = 'name';
            const label = 'label';
            const errorMessage = 'errorMessage';
            const onChange = () => {};
            const type = 'invalid';

            const component = (
                <InputField
                    controlId={controlId}
                    name={name}
                    label={label}
                    errorMessage={errorMessage}
                    onChange={onChange}
                    type={type}
                />
            );
            renderer.create(component);
        };

        expect(renderInputField).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid description throws prop type error', () => {
        const renderInputField = () => {
            const controlId = 'controlId';
            const name = 'name';
            const label = 'label';
            const errorMessage = 'errorMessage';
            const onChange = () => {};
            const description = 123;

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
            renderer.create(component);
        };

        expect(renderInputField).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid ariaLabel throws prop type error', () => {
        const renderInputField = () => {
            const controlId = 'controlId';
            const name = 'name';
            const label = 'label';
            const errorMessage = 'errorMessage';
            const onChange = () => {};
            const ariaLabel = 123;

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
            renderer.create(component);
        };

        expect(renderInputField).toThrowError('Warning: Failed prop type');
    });

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
