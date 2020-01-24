import React from 'react';
import renderer from 'react-test-renderer';
import { StaticQuery } from 'gatsby';
import Location, { ListAddress } from '../Location';

describe('Location', () => {
    it('renders empty data', () => {
        const data = {};
        StaticQuery.mockImplementationOnce(({ render }) => render(data));

        const component = <Location />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders empty globalSettings data', () => {
        const data = {
            globalSettings: {},
        };
        StaticQuery.mockImplementationOnce(({ render }) => render(data));

        const component = <Location />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders empty location data', () => {
        const data = {
            globalSettings: {
                location: {},
            },
        };
        StaticQuery.mockImplementationOnce(({ render }) => render(data));

        const component = <Location />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders empty address data', () => {
        const data = {
            globalSettings: {
                location: {
                    address: {},
                },
            },
        };
        StaticQuery.mockImplementationOnce(({ render }) => render(data));

        const component = <Location />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders address data with company, first address line and postal code', () => {
        const data = {
            globalSettings: {
                location: {
                    address: {
                        company: 'company',
                        addressLine1: 'addressLine1',
                        addressLine2: '',
                        province: '',
                        postalCode: 'postalCode',
                        country: '',
                    },
                },
            },
        };
        StaticQuery.mockImplementationOnce(({ render }) => render(data));

        const component = <Location />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders complete address data (company, first and second address line, province, postal code and country', () => {
        const data = {
            globalSettings: {
                location: {
                    address: {
                        company: 'company',
                        addressLine1: 'addressLine1',
                        addressLine2: 'addressLine2',
                        province: 'province',
                        postalCode: 'postalCode',
                        country: 'country',
                    },
                },
            },
        };
        StaticQuery.mockImplementationOnce(({ render }) => render(data));

        const component = <Location />;
        const tree = renderer.create(component).toJSON();

        expect(tree).toMatchSnapshot();
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
});
