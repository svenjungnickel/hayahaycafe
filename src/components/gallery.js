import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'nuka-carousel';
import FsLightbox from 'fslightbox-react';
import Image from './image';
import GalleryStyle from '../styles/components/gallery.module.scss';
import SectionStyles from '../styles/components/section.module.scss';

const Gallery = ({ images }) => {
    if (!images || 0 === images.length) {
        return;
    }

    const [toggler, setToggler] = useState(false);

    const imageSources = images.map(image => {
        if (!!image.src && !!image.src.childImageSharp) {
            if (!!image.src.childImageSharp.fluid) {
                return image.src.childImageSharp.fluid.src;
            }

            return image.src.childImageSharp.fixed.src;
        }

        return image.src;
    });

    const navigationButtonLeft = ({ previousSlide }) => (
        <button className={GalleryStyle.navigationButtonLeft} aria-label="previous slide" onClick={previousSlide}>
            &lsaquo;
        </button>
    );

    const navigationButtonRight = ({ nextSlide }) => (
        <button className={GalleryStyle.navigationButtonRight} aria-label="next slide" onClick={nextSlide}>
            &rsaquo;
        </button>
    );

    return (
        <section className={SectionStyles.section} id="gallery">
            <div className="container">
                <h2 className="display-5 text-center">Gallery</h2>
                <Carousel
                    dragging={true}
                    swiping={true}
                    heightMode="first"
                    renderCenterLeftControls={navigationButtonLeft}
                    renderCenterRightControls={navigationButtonRight}
                >
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            title={image.title}
                            onClick={() => setToggler(!toggler)}
                        />
                    ))}
                </Carousel>
                <FsLightbox toggler={toggler} sources={imageSources} />
            </div>
        </section>
    );
};

Gallery.propTypes = {
    images: PropTypes.array,
};

export default Gallery;
