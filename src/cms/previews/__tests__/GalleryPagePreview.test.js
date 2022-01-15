import React from 'react';
import renderer from 'react-test-renderer';
import GalleryPagePreview from '../GalleryPagePreview';
import GalleryPageData from '../../../__fixtures__/GalleryPageData';

jest.mock('../../../components/Header');
jest.mock('../../../components/Separator');
jest.mock('../../../components/Image');

describe('GalleryPagePreview', () => {
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
