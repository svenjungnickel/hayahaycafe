import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { HTMLContent } from './Content';
import { openingHours } from '../styles/components/OpeningHours.module.scss';

const OpeningHours = () => {
    const { globalSettings } = useStaticQuery(graphql`
        query {
            globalSettings: settingsYaml {
                openingHours
            }
        }
    `);

    return (
        <>
            {!!globalSettings && !!globalSettings.openingHours && (
                <div className={openingHours}>
                    <h2>Opening Hours</h2>
                    <HTMLContent content={globalSettings.openingHours} />
                </div>
            )}
        </>
    );
};

export default OpeningHours;
