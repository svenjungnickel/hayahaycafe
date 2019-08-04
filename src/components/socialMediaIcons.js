import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import Styles from '../styles/components/socialMediaIcons.module.scss';

export default ({ items }) => {
    const SocialMediaIcon = ({ item }) => (
        <Button
            href={item.link}
            size="lg"
            target="_blank"
            type="button"
            rel="noreferrer"
            aria-label={`Visit Hayahay Cafe at ${item.type}`}
        >
            {'facebook' === item.type && <FaFacebookF />}
            {'instagram' === item.type && <FaInstagram />}
        </Button>
    );

    return (
        <div className={`container text-center ${Styles.socialMedia}`}>
            {items.map(item => (
                <SocialMediaIcon item={item} />
            ))}
        </div>
    );
};
