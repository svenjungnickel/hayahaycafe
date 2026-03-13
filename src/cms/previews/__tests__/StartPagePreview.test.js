import React from 'react';
import { render } from '@testing-library/react';
import StartPagePreview from '../StartPagePreview';
import StartPageData from '../../../__fixtures__/StartPageData';

jest.mock('../../../components/Image');
jest.mock('../../../components/Header');
jest.mock('../../../components/Location/Location');
jest.mock('../../../components/Separator');
jest.mock('../../../components/OpeningHours');
jest.mock('../../../components/What3WordsAddress');

describe('StartPagePreview', () => {
    it('renders correctly', () => {
        const entry = {
            toJS: () => {
                return {
                    data: StartPageData,
                };
            },
        };
        const widgetFor = () => 'content';

        const component = <StartPagePreview entry={entry} widgetFor={widgetFor} />;
        const tree = render(component).asFragment();

        expect(tree).toMatchSnapshot();
    });
});
