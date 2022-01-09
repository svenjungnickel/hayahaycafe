import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import Image from './Image';
import { what3words, what3words__link, what3words__address } from '../styles/components/What3WordsAddress.module.scss';

export const What3Words = ({ what3WordsAddress, what3WordsIcon }) => (
    <a
        href={`https://what3words.com/${what3WordsAddress}`}
        target="_blank"
        rel="noopener noreferrer"
        className={what3words__link}
    >
        <Image src={what3WordsIcon} alt="What3words address" />
        <p className={what3words__address}>{`///${what3WordsAddress}`}</p>
    </a>
);

What3Words.propTypes = {
    what3WordsAddress: PropTypes.string.isRequired,
    what3WordsIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
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
                what3WordsIcon: file(relativePath: { eq: "what3words-icon.png" }) {
                    childImageSharp {
                        fixed(width: 80, height: 80) {
                            ...GatsbyImageSharpFixed_withWebp
                        }
                    }
                    publicURL
                }
            }
        `}
        render={({ globalSettings, what3WordsIcon }) => (
            <>
                {!!globalSettings && !!globalSettings.location && !!globalSettings.location.what3WordsAddress && (
                    <div className={what3words}>
                        <h2>Map</h2>
                        <What3Words
                            what3WordsAddress={globalSettings.location.what3WordsAddress}
                            what3WordsIcon={what3WordsIcon}
                        />
                    </div>
                )}
            </>
        )}
    />
);

export default What3WordsAddress;
