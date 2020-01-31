import React from 'react';
import renderer from 'react-test-renderer';
import AddressItem from '../AddressItem';

describe('AddressItem', () => {
    it('renders without item throws prop type error', () => {
        const renderAddressItem = () => {
            const component = <AddressItem />;
            renderer.create(component);
        };

        expect(renderAddressItem).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid item data throws prop type error', () => {
        const renderAddressItem = () => {
            const item = 123;

            const component = <AddressItem item={item} />;
            renderer.create(component);
        };

        expect(renderAddressItem).toThrowError('Warning: Failed prop type');
    });

    it('renders correctly ', () => {
        const item = 'item';

        const component = <AddressItem item={item} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
