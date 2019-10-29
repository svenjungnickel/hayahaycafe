import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';

const AddressItem = ({ item }) => <>{item && <>{item}, </>}</>;

AddressItem.propTypes = {
    item: PropTypes.string.isRequired,
};

const FooterAddress = () => (
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
                    <p>
                        <AddressItem item={globalSettings.location.address.company} />
                        <AddressItem item={globalSettings.location.address.addressLine1} />
                        <AddressItem item={globalSettings.location.address.addressLine2} />
                        <AddressItem item={globalSettings.location.address.province} />
                        <AddressItem item={globalSettings.location.address.postalCode} />
                        {globalSettings.location.address.country && <>{globalSettings.location.address.country}</>}
                    </p>
                )}
            </>
        )}
    />
);

export default FooterAddress;
