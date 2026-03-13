import React from 'react';
import { render } from '@testing-library/react';
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
        const tree = render(component).asFragment();

        expect(tree).toMatchSnapshot();
    });
});
