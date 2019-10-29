import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { HTMLContent } from './content';

const OpeningHours = () => (
    <StaticQuery
        query={graphql`
            query {
                globalSettings: settingsYaml {
                    openingHours
                }
            }
        `}
        render={({ globalSettings: { openingHours } }) => (
            <>
                {!!openingHours && (
                    <>
                        <h2>Opening Hours</h2>
                        <HTMLContent content={openingHours} />
                    </>
                )}
            </>
        )}
    />
);

export default OpeningHours;
