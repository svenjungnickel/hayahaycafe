import React from 'react';
import { render } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';
import OpeningHours from '../OpeningHours';

describe('OpeningHours', () => {
    it('does not render empty data', () => {
        const data = {};
        useStaticQuery.mockImplementationOnce(() => data);

        const component = <OpeningHours />;
        const tree = render(component).asFragment();

        expect(tree).toMatchSnapshot();
    });

    it('does not render empty globalSettings data', () => {
        const data = {
            globalSettings: {},
        };
        useStaticQuery.mockImplementationOnce(() => data);

        const component = <OpeningHours />;
        const tree = render(component).asFragment();

        expect(tree).toMatchSnapshot();
    });

    it('renders correctly', () => {
        const data = {
            globalSettings: {
                openingHours: <p>openingHours</p>,
            },
        };
        useStaticQuery.mockImplementationOnce(() => data);

        const component = <OpeningHours />;
        const tree = render(component).asFragment();

        expect(tree).toMatchSnapshot();
    });
});
