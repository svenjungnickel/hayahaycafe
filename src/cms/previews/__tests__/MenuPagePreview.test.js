import React from 'react';
import renderer from 'react-test-renderer';
import MenuPagePreview from '../MenuPagePreview';
import MenuPageData from '../../../__fixtures__/MenuPageData';

jest.mock('../../../components/Header');
jest.mock('../../../components/Separator');
jest.mock('../../../components/Image');

describe('MenuPagePreview', () => {
    it('renders without entry throws prop type error', () => {
        const renderMenuPagePreview = () => {
            const widgetFor = () => {};

            const component = <MenuPagePreview widgetFor={widgetFor} />;
            renderer.create(component);
        };

        expect(renderMenuPagePreview).toThrowError('Warning: Failed prop type');
    });

    it('renders without widgetFor throws prop type error', () => {
        const renderMenuPagePreview = () => {
            const entry = {
                toJS: () => {},
            };

            const component = <MenuPagePreview entry={entry} />;
            renderer.create(component);
        };

        expect(renderMenuPagePreview).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid entry throws prop type error', () => {
        const renderMenuPagePreview = () => {
            const entry = {
                toJS: 123,
            };
            const widgetFor = () => {};

            const component = <MenuPagePreview entry={entry} widgetFor={widgetFor} />;
            renderer.create(component);
        };

        expect(renderMenuPagePreview).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid widgetFor throws prop type error', () => {
        const renderMenuPagePreview = () => {
            const entry = {
                toJS: () => {},
            };
            const widgetFor = {};

            const component = <MenuPagePreview entry={entry} widgetFor={widgetFor} />;
            renderer.create(component);
        };

        expect(renderMenuPagePreview).toThrowError('Warning: Failed prop type');
    });

    it('renders correctly', () => {
        const entry = {
            toJS: () => {
                return {
                    data: MenuPageData,
                };
            },
        };
        const widgetFor = () => 'content';

        const component = <MenuPagePreview entry={entry} widgetFor={widgetFor} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
