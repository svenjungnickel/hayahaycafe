import React from 'react';
import renderer from 'react-test-renderer';
import DefaultPagePreview from '../DefaultPagePreview';

jest.mock('../../../components/Header');

describe('DefaultPagePreview', () => {
    it('renders without entry throws prop type error', () => {
        const renderDefaultPagePreview = () => {
            const widgetFor = () => {};

            const component = <DefaultPagePreview widgetFor={widgetFor} />;
            renderer.create(component);
        };

        expect(renderDefaultPagePreview).toThrowError('Warning: Failed prop type');
    });

    it('renders without widgetFor throws prop type error', () => {
        const renderDefaultPagePreview = () => {
            const entry = {
                toJS: () => {},
            };

            const component = <DefaultPagePreview entry={entry} />;
            renderer.create(component);
        };

        expect(renderDefaultPagePreview).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid entry throws prop type error', () => {
        const renderDefaultPagePreview = () => {
            const entry = {
                toJS: 123,
            };
            const widgetFor = () => {};

            const component = <DefaultPagePreview entry={entry} widgetFor={widgetFor} />;
            renderer.create(component);
        };

        expect(renderDefaultPagePreview).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid widgetFor throws prop type error', () => {
        const renderDefaultPagePreview = () => {
            const entry = {
                toJS: () => {},
            };
            const widgetFor = {};

            const component = <DefaultPagePreview entry={entry} widgetFor={widgetFor} />;
            renderer.create(component);
        };

        expect(renderDefaultPagePreview).toThrowError('Warning: Failed prop type');
    });

    it('renders correctly', () => {
        const entry = {
            toJS: () => {
                return {
                    data: {
                        title: 'title',
                        subtitle: 'subtitle',
                        headerImage: {
                            src: 'src',
                        },
                    },
                };
            },
        };
        const widgetFor = () => 'content';

        const component = <DefaultPagePreview entry={entry} widgetFor={widgetFor} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
