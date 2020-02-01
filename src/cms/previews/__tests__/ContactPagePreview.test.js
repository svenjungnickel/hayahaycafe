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
    it('renders without entry throws prop type error', () => {
        const renderContactPagePreview = () => {
            const widgetFor = () => {};

            const component = <ContactPagePreview widgetFor={widgetFor} />;
            renderer.create(component);
        };

        expect(renderContactPagePreview).toThrowError('Warning: Failed prop type');
    });

    it('renders without widgetFor throws prop type error', () => {
        const renderContactPagePreview = () => {
            const entry = {
                toJS: () => {},
            };

            const component = <ContactPagePreview entry={entry} />;
            renderer.create(component);
        };

        expect(renderContactPagePreview).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid entry throws prop type error', () => {
        const renderContactPagePreview = () => {
            const entry = {
                toJS: 123,
            };
            const widgetFor = () => {};

            const component = <ContactPagePreview entry={entry} widgetFor={widgetFor} />;
            renderer.create(component);
        };

        expect(renderContactPagePreview).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid widgetFor throws prop type error', () => {
        const renderContactPagePreview = () => {
            const entry = {
                toJS: () => {},
            };
            const widgetFor = {};

            const component = <ContactPagePreview entry={entry} widgetFor={widgetFor} />;
            renderer.create(component);
        };

        expect(renderContactPagePreview).toThrowError('Warning: Failed prop type');
    });

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
