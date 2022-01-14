import React from 'react';
import renderer from 'react-test-renderer';
import { StaticQuery } from 'gatsby';
import What3WordsAddress from '../What3WordsAddress';

jest.mock('../Image');

describe('What3WordsAddress', () => {
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
        };
        StaticQuery.mockImplementationOnce(({ render }) => render(data));

        const component = <What3WordsAddress />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
