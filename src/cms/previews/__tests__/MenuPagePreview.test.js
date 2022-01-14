import React from 'react';
import renderer from 'react-test-renderer';
import MenuPagePreview from '../MenuPagePreview';
import MenuPageData from '../../../__fixtures__/MenuPageData';

jest.mock('../../../components/Header');
jest.mock('../../../components/Separator');
jest.mock('../../../components/Image');

describe('MenuPagePreview', () => {
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
