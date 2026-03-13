import React from 'react';
import { render } from '@testing-library/react';
import AddressItem from '../AddressItem';

describe('AddressItem', () => {
    it('renders correctly', () => {
        const item = 'item';

        const component = <AddressItem item={item} />;
        const tree = render(component).asFragment();

        expect(tree).toMatchSnapshot();
    });
});
