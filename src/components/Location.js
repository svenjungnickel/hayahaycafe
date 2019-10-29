import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';

const AddressItem = ({ item }) => (
    <>
        {item && (
            <>
                {item}
                <br />
            </>
        )}
    </>
);

AddressItem.propTypes = {
    item: PropTypes.string.isRequired,
};

const Address = ({ address }) => (
    <>
        <h2>Location</h2>
        <AddressItem item={address.company} />
        <AddressItem item={address.addressLine1} />
        <AddressItem item={address.addressLine2} />
        <AddressItem item={address.province} />
        <AddressItem item={address.postalCode} />
        {address.country && <>{address.country}</>}
    </>
);

Address.propTypes = {
    address: PropTypes.shape({
        company: PropTypes.string,
        addressLine1: PropTypes.string,
        addressLine2: PropTypes.string,
        province: PropTypes.string,
        postalCode: PropTypes.string,
        country: PropTypes.string,
    }).isRequired,
};

const Location = () => (
    <StaticQuery
        query={graphql`
            query {
                globalSettings: settingsYaml {
                    location {
                        address {
                            company
                            addressLine1
                            addressLine2
                            province
                            postalCode
                            country
                        }
                    }
                }
            }
        `}
        render={({ globalSettings }) => (
            <>
                {!!globalSettings && !!globalSettings.location && !!globalSettings.location.address && (
                    <Address address={globalSettings.location.address} />
                )}
            </>
        )}
    />
);

export default Location;
