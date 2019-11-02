import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import Image from './Image';
import What3WordsAddressStyles from '../styles/components/What3WordsAddress.module.scss';

const What3Words = ({ what3WordsAddress, what3WordsIcon }) => (
    <a
        href={`https://what3words.com/${what3WordsAddress}`}
        target="_blank"
        rel="noreferrer"
        className={What3WordsAddressStyles.what3words}
    >
        <Image src={what3WordsIcon} alt="What3words address" />
        <p className={What3WordsAddressStyles.what3words__address}>///{what3WordsAddress}</p>
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
                            ...GatsbyImageSharpFixed
                        }
                    }
                    publicURL
                }
            }
        `}
        render={({ globalSettings, what3WordsIcon }) => (
            <>
                {!!globalSettings && !!globalSettings.location && !!globalSettings.location.what3WordsAddress && (
                    <>
                        <h2>Map</h2>
                        <What3Words
                            what3WordsAddress={globalSettings.location.what3WordsAddress}
                            what3WordsIcon={what3WordsIcon}
                        />
                    </>
                )}
            </>
        )}
    />
);

export default What3WordsAddress;
