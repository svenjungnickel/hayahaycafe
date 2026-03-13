import React from 'react';
import { render } from '@testing-library/react';
import NotFoundPage from '../404';

jest.mock('../../components/Layout');
jest.mock('../../components/Header');

describe('404', () => {
    it('renders correctly', () => {
        const data = {
            headerImage: 'headerImage',
        };

        const component = <NotFoundPage data={data} />;
        const tree = render(component).asFragment();

        expect(tree).toMatchSnapshot();
    });
});
