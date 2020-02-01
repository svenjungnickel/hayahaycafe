import React from 'react';
import renderer from 'react-test-renderer';
import StartPagePreview from '../StartPagePreview';

jest.mock('../../../components/Image');
jest.mock('../../../components/Gallery');
jest.mock('../../../components/Header');
jest.mock('../../../components/Location/Location');
jest.mock('../../../components/Separator');
jest.mock('../../../components/OpeningHours');
jest.mock('../../../components/What3WordsAddress');

describe('StartPagePreview', () => {
    it('renders without entry throws prop type error', () => {
        const renderStartPagePreview = () => {
            const widgetFor = () => {};

            const component = <StartPagePreview widgetFor={widgetFor} />;
            renderer.create(component);
        };

        expect(renderStartPagePreview).toThrowError('Warning: Failed prop type');
    });

    it('renders without widgetFor throws prop type error', () => {
        const renderDefaultPagePreview = () => {
            const entry = {
                toJS: () => {},
            };

            const component = <StartPagePreview entry={entry} />;
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

            const component = <StartPagePreview entry={entry} widgetFor={widgetFor} />;
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

            const component = <StartPagePreview entry={entry} widgetFor={widgetFor} />;
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
                            publicURL: 'publicURL',
                        },
                        gallery: [
                            {
                                src: {
                                    publicURL: 'publicURL',
                                },
                                alt: 'gallery image 01',
                                title: 'Gallery Image 01',
                            },
                            {
                                src: {
                                    publicURL: 'publicURL',
                                },
                                alt: 'gallery image 02',
                                title: 'Gallery Image 02',
                            },
                        ],
                    },
                };
            },
        };
        const widgetFor = () => 'content';

        const component = <StartPagePreview entry={entry} widgetFor={widgetFor} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
