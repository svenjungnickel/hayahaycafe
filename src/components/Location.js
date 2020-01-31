import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import ListAddress from './ListAddress';

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
