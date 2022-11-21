import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

export const ListFooterAddress = ({ address }) => {
    const filteredAddressItems = Object.values(address).filter((item) => '' !== item);

    return <p>{0 < filteredAddressItems.length && <>{filteredAddressItems.join(', ')}</>}</p>;
};

ListFooterAddress.propTypes = {
    address: PropTypes.shape({
        company: PropTypes.string,
        addressLine1: PropTypes.string,
        addressLine2: PropTypes.string,
        province: PropTypes.string,
        postalCode: PropTypes.string,
        country: PropTypes.string,
    }).isRequired,
};

const FooterAddress = () => {
    const { globalSettings } = useStaticQuery(graphql`
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
    `);

    return (
        <>
            {!!globalSettings && !!globalSettings.location && !!globalSettings.location.address && (
                <ListFooterAddress address={globalSettings.location.address} />
            )}
        </>
    );
};

export default FooterAddress;
