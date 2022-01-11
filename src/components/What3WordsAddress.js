import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { what3words, what3words__link, what3words__address } from '../styles/components/What3WordsAddress.module.scss';

export const What3Words = ({ what3WordsAddress }) => (
    <a
        href={`https://what3words.com/${what3WordsAddress}`}
        target="_blank"
        rel="noopener noreferrer"
        className={what3words__link}
    >
        <StaticImage src="../../assets/what3words-icon.png" height={80} width={80} alt="What3words address" />
        <p className={what3words__address}>{`///${what3WordsAddress}`}</p>
    </a>
);

What3Words.propTypes = {
    what3WordsAddress: PropTypes.string.isRequired,
};

const What3WordsAddress = () => (
    <StaticQuery
        query={graphql`
            query {
                globalSettings: settingsYaml {
                    location {
                        what3WordsAddress
                    }
                }
            }
        `}
        render={({ globalSettings }) => (
            <>
                {globalSettings?.location?.what3WordsAddress && (
                    <div className={what3words}>
                        <h2>Map</h2>
                        <What3Words what3WordsAddress={globalSettings.location.what3WordsAddress} />
                    </div>
                )}
            </>
        )}
    />
);

export default What3WordsAddress;
