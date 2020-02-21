import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { HTMLContent } from './Content';
import OpeningHoursStyles from '../styles/components/OpeningHours.module.scss';

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
                    <div className={OpeningHoursStyles.openingHours}>
                        <h2>Opening Hours</h2>
                        <HTMLContent content={globalSettings.openingHours} />
                    </div>
                )}
            </>
        )}
    />
);

export default OpeningHours;
