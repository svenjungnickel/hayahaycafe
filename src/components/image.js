import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Image = ({ src, className, alt, title }) => {
    if (!!src && !!src.childImageSharp) {
        if (!!src.childImageSharp.fluid) {
            return <Img fluid={src.childImageSharp.fluid} className={className} alt={alt} title={title} />;
        }

        return <Img fixed={src.childImageSharp.fixed} className={className} alt={alt} title={title} />;
    }

    return <img src={src} className={className} alt={alt} title={title} />;
};

Image.propTypes = {
    src: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    className: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
};

export default Image;
