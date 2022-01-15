import React from 'react';
import renderer from 'react-test-renderer';
import ContactPagePreview from '../ContactPagePreview';
import ContactPageData from '../../../__fixtures__/ContactPageData';

jest.mock('../../../components/Header');
jest.mock('../../../components/ContactForm/ContactForm');
jest.mock('../../../components/Location/Location');
jest.mock('../../../components/Separator');
jest.mock('../../../components/What3WordsAddress');
jest.mock('../../../components/OpeningHours');

describe('ContactPagePreview', () => {
    it('renders correctly', () => {
        const entry = {
            toJS: () => {
                return {
                    data: ContactPageData,
                };
            },
        };
        const widgetFor = () => 'content';

        const component = <ContactPagePreview entry={entry} widgetFor={widgetFor} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
