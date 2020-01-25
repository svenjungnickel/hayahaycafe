import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import Button from 'react-bootstrap/Button';
import { FaFacebookF, FaInstagram, FaTripadvisor } from 'react-icons/fa';
import SocialMediaIconsStyles from '../styles/components/SocialMediaIcons.module.scss';

export const SocialMediaIcon = ({ item }) => (
    <Button
        href={item.url}
        size="lg"
        target="_blank"
        type="button"
        rel="noreferrer"
        aria-label={`Visit Hayahay Cafe at ${item.type}`}
    >
        {'facebook' === item.type && <FaFacebookF />}
        {'instagram' === item.type && <FaInstagram />}
        {'tripadvisor' === item.type && <FaTripadvisor />}
    </Button>
);

SocialMediaIcon.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['facebook', 'instagram', 'tripadvisor']).isRequired,
    }).isRequired,
};

const SocialMediaIcons = () => (
    <StaticQuery
        query={graphql`
            query {
                globalSettings: settingsYaml {
                    socialMedia {
                        url
                        type
                    }
                }
            }
        `}
        render={({ globalSettings }) => (
            <>
                {globalSettings && globalSettings.socialMedia && 0 < globalSettings.socialMedia.length && (
                    <div className={`container text-center ${SocialMediaIconsStyles.socialMediaIcon}`}>
                        {globalSettings.socialMedia.map(item => (
                            <SocialMediaIcon item={item} key={item.type} />
                        ))}
                    </div>
                )}
            </>
        )}
    />
);

export default SocialMediaIcons;
