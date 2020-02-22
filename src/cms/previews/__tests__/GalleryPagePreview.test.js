import React from 'react';
import renderer from 'react-test-renderer';
import GalleryPagePreview from '../GalleryPagePreview';
import GalleryPageData from '../../../__fixtures__/GalleryPageData';

jest.mock('../../../components/Header');
jest.mock('../../../components/Separator');
jest.mock('../../../components/Image');

describe('GalleryPagePreview', () => {
    it('renders without entry throws prop type error', () => {
        const renderStartPagePreview = () => {
            const widgetFor = () => {};

            const component = <GalleryPagePreview widgetFor={widgetFor} />;
            renderer.create(component);
        };

        expect(renderStartPagePreview).toThrowError('Warning: Failed prop type');
    });

    it('renders without widgetFor throws prop type error', () => {
        const renderDefaultPagePreview = () => {
            const entry = {
                toJS: () => {},
            };

            const component = <GalleryPagePreview entry={entry} />;
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

            const component = <GalleryPagePreview entry={entry} widgetFor={widgetFor} />;
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

            const component = <GalleryPagePreview entry={entry} widgetFor={widgetFor} />;
            renderer.create(component);
        };

        expect(renderDefaultPagePreview).toThrowError('Warning: Failed prop type');
    });

    it('renders correctly', () => {
        const entry = {
            toJS: () => {
                return {
                    data: GalleryPageData,
                };
            },
        };
        const widgetFor = () => 'content';

        const component = <GalleryPagePreview entry={entry} widgetFor={widgetFor} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
