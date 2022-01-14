import React from 'react';
import renderer from 'react-test-renderer';
import AddressItem from '../AddressItem';

describe('AddressItem', () => {
    it('renders correctly', () => {
        const item = 'item';

        const component = <AddressItem item={item} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
