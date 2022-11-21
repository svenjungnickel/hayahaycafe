import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ListAddress from './ListAddress';

const Location = () => {
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
                <ListAddress address={globalSettings.location.address} />
            )}
        </>
    );
};

export default Location;
