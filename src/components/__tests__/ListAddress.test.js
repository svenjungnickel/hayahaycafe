import React from 'react';
import renderer from 'react-test-renderer';
import ListAddress from '../ListAddress';

describe('Listaddress', () => {
    it('renders without address throws prop type error', () => {
        const renderListAddress = () => {
            const component = <ListAddress />;
            renderer.create(component);
        };

        expect(renderListAddress).toThrowError('Warning: Failed prop type');
    });

    it('renders with invalid address data throws prop type error', () => {
        const renderListAddress = () => {
            const address = {
                company: '',
                addressLine1: 'addressLine1',
                addressLine2: '',
                province: 'province',
                postalCode: 12345,
                country: '',
            };

            const component = <ListAddress address={address} />;
            renderer.create(component);
        };

        expect(renderListAddress).toThrowError('Warning: Failed prop type');
    });

    it('renders correctly ', () => {
        const address = {
            company: '',
            addressLine1: 'addressLine1',
            addressLine2: '',
            province: 'province',
            postalCode: '12345',
            country: '',
        };

        const component = <ListAddress address={address} />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
