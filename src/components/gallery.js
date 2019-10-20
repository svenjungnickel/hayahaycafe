import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'nuka-carousel';
import FsLightbox from 'fslightbox-react';
import Image from './image';
import GalleryStyle from '../styles/components/gallery.module.scss';
import SectionStyles from '../styles/components/section.module.scss';
import '../styles/libs/fslightbox-react.css';

const PreviousButton = ({ previousSlide }) => (
    <button className={GalleryStyle.previousButton} aria-label="previous" onClick={previousSlide}>
        &lsaquo;
    </button>
);

PreviousButton.prototype = {
    previousSlide: PropTypes.func,
};

const NextButton = ({ nextSlide }) => (
    <button className={GalleryStyle.nextButton} aria-label="next" onClick={nextSlide}>
        &rsaquo;
    </button>
);

NextButton.prototype = {
    previousSlide: PropTypes.func,
};

const PagingDots = ({ slideCount, slidesToScroll, goToSlide, currentSlide }) => (
    <ul className={GalleryStyle.pagingDots__list}>
        {PagingDots.getIndexes(slideCount, slidesToScroll).map(index => {
            return (
                <li className={GalleryStyle.pagingDots__listItem} key={index}>
                    <button
                        className={GalleryStyle.pagingDots__button}
                        style={{ opacity: currentSlide === index ? 1 : 0.5 }}
                        onClick={goToSlide.bind(null, index)}
                    >
                        &bull;
                    </button>
                </li>
            );
        })}
    </ul>
);

PagingDots.getIndexes = (count, inc) => {
    const arr = [];
    for (let i = 0; i < count; i += inc) {
        arr.push(i);
    }
    return arr;
};

PagingDots.propTypes = {
    slideCount: PropTypes.number,
    slidesToScroll: PropTypes.number,
    goToSlide: PropTypes.func,
    currentSlide: PropTypes.number,
};

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

    return (
        <section className={SectionStyles.section} id="gallery">
            <div className="container">
                <h2 className="display-5 text-center">Gallery</h2>
                <Carousel
                    dragging={true}
                    swiping={true}
                    heightMode="first"
                    renderCenterLeftControls={props => <PreviousButton {...props} />}
                    renderCenterRightControls={props => <NextButton {...props} />}
                    renderBottomCenterControls={props => <PagingDots {...props} />}
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
