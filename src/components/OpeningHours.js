import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { HTMLContent } from './Content';

const OpeningHours = () => (
    <StaticQuery
        query={graphql`
            query {
                globalSettings: settingsYaml {
                    openingHours
                }
            }
        `}
        render={({ globalSettings }) => (
            <>
                {!!globalSettings && !!globalSettings.openingHours && (
                    <>
                        <h2>Opening Hours</h2>
                        <HTMLContent content={globalSettings.openingHours} />
                    </>
                )}
            </>
        )}
    />
);

export default OpeningHours;
