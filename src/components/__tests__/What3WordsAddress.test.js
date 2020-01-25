import React from 'react';
import renderer from 'react-test-renderer';
import { StaticQuery } from 'gatsby';
import What3WordsAddress, { What3Words } from '../What3WordsAddress';

jest.mock('../Image');

describe('What3WordsAddress', () => {
    it('renders without required what3WordsAddress throws prop type error', () => {
        const renderWhat3Words = () => {
            const what3WordsIcon = 'what3WordsIcon';

            const component = <What3Words what3WordsIcon={what3WordsIcon} />;
            renderer.create(component);
        };

        expect(renderWhat3Words).toThrowError('Warning: Failed prop type');
    });

    it('renders without required what3WordsIcon throws prop type error', () => {
        const renderWhat3Words = () => {
            const what3WordsAddress = 'what3WordsAddress';

            const component = <What3Words what3WordsAddress={what3WordsAddress} />;
            renderer.create(component);
        };

        expect(renderWhat3Words).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid what3WordsAddress throws prop type error', () => {
        const renderWhat3Words = () => {
            const what3WordsAddress = 123;
            const what3WordsIcon = 'what3WordsIcon';

            const component = <What3Words what3WordsAddress={what3WordsAddress} what3WordsIcon={what3WordsIcon} />;
            renderer.create(component);
        };

        expect(renderWhat3Words).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid what3WordsIcon throws prop type error', () => {
        const renderWhat3Words = () => {
            const what3WordsAddress = 'what3WordsAddress';
            const what3WordsIcon = 123;

            const component = <What3Words what3WordsAddress={what3WordsAddress} what3WordsIcon={what3WordsIcon} />;
            renderer.create(component);
        };

        expect(renderWhat3Words).toThrowError('Warning: Failed prop type');
    });

    it('does not render empty data', () => {
        const data = {};
        StaticQuery.mockImplementationOnce(({ render }) => render(data));

        const component = <What3WordsAddress />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('does not render empty globalSettings data', () => {
        const data = {
            globalSettings: {},
        };
        StaticQuery.mockImplementationOnce(({ render }) => render(data));

        const component = <What3WordsAddress />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('does not render empty location data', () => {
        const data = {
            globalSettings: {
                location: {},
            },
        };
        StaticQuery.mockImplementationOnce(({ render }) => render(data));

        const component = <What3WordsAddress />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders correctly', () => {
        const data = {
            globalSettings: {
                location: {
                    what3WordsAddress: 'what3WordsAddress',
                },
            },
            what3WordsIcon: {
                publicURL: 'publicURL',
            },
        };
        StaticQuery.mockImplementationOnce(({ render }) => render(data));

        const component = <What3WordsAddress />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
