import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Image = props => {
    const { src } = props;

    if (!!src && !!src.childImageSharp) {
        if (!!src.childImageSharp.fluid) {
            return <Img fluid={src.childImageSharp.fluid} {...props} />;
        }

        return <Img fixed={src.childImageSharp.fixed} {...props} />;
    }

    return <img src={src} {...props} />;
};

Image.propTypes = {
    src: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    className: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    onClick: PropTypes.func,
};

export default Image;
