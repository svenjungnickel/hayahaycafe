import React from 'react';
import renderer from 'react-test-renderer';
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
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
