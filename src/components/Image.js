import React from 'react';
import PropTypes from 'prop-types';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

const Image = (props) => {
    const { src } = props;
    const image = getImage(src);

    if (image) {
        return <GatsbyImage image={image} loading="lazy" {...props} />;
    }

    return <img src={src} loading="lazy" {...props} />;
};

Image.propTypes = {
    src: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
};

export default Image;
