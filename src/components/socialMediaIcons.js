import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { FaFacebookF, FaInstagram, FaTripadvisor } from 'react-icons/fa';
import Styles from '../styles/components/socialMediaIcons.module.scss';

const SocialMediaIcon = ({ item }) => (
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
        type: PropTypes.string.isRequired,
    }),
};

const SocialMediaIcons = ({ items }) => (
    <div className={`container text-center ${Styles.socialMedia}`}>
        {items.map(item => (
            <SocialMediaIcon item={item} key={item.type} />
        ))}
    </div>
);

SocialMediaIcons.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default SocialMediaIcons;
