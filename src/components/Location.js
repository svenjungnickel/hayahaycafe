import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';

const ListAddress = ({ address }) => {
    const filteredAddressItems = Object.values(address).filter(item => '' !== item);

    return (
        <>
            <h2>Location</h2>
            {0 < filteredAddressItems.length && <>{filteredAddressItems.join('<br />')}</>}
        </>
    );
};

ListAddress.propTypes = {
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
                    <ListAddress address={globalSettings.location.address} />
                )}
            </>
        )}
    />
);

export default Location;
