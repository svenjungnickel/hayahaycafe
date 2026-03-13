import React from 'react';
import { render } from '@testing-library/react';
import ListAddress from '../ListAddress';

describe('Listaddress', () => {
    it('renders correctly', () => {
        const address = {
            company: '',
            addressLine1: 'addressLine1',
            addressLine2: '',
            province: 'province',
            postalCode: '12345',
            country: '',
        };

        const component = <ListAddress address={address} />;
        const tree = render(component).asFragment();

        expect(tree).toMatchSnapshot();
    });
});
