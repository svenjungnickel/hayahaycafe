import React from 'react';
import renderer from 'react-test-renderer';
import DefaultPagePreview from '../DefaultPagePreview';
import DefaultPageData from '../../../__fixtures__/DefaultPageData';

jest.mock('../../../components/Header');

describe('DefaultPagePreview', () => {
    it('renders correctly', () => {
        const entry = {
            toJS: () => {
                return {
                    data: DefaultPageData,
                };
            },
        };
        const widgetFor = () => 'content';

        const component = <DefaultPagePreview entry={entry} widgetFor={widgetFor} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
