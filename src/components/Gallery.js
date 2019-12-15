import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'nuka-carousel';
import FsLightbox from 'fslightbox-react';
import Image from './Image';
import GalleryStyle from '../styles/components/Gallery.module.scss';
import '../styles/libs/fslightbox-react.scss';

const PreviousButton = ({ previousSlide }) => (
    <button className={GalleryStyle.previousButton} aria-label="previous" onClick={previousSlide}>
        &lsaquo;
    </button>
);

PreviousButton.propTypes = {
    previousSlide: PropTypes.func.isRequired,
};

const NextButton = ({ nextSlide }) => (
    <button className={GalleryStyle.nextButton} aria-label="next" onClick={nextSlide}>
        &rsaquo;
    </button>
);

NextButton.propTypes = {
    previousSlide: PropTypes.func.isRequired,
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
    slideCount: PropTypes.number.isRequired,
    slidesToScroll: PropTypes.number.isRequired,
    goToSlide: PropTypes.func.isRequired,
    currentSlide: PropTypes.number.isRequired,
};

const Gallery = ({ images }) => {
    const [toggler, setToggler] = useState(false);
    const imageSources = images.map(image => {
        if (!!image.src && !!image.src.childImageSharp) {
            if (image.src.childImageSharp.fluid) {
                return image.src.childImageSharp.fluid.src;
            }

            return image.src.childImageSharp.fixed.src;
        }

        return image.src;
    });

    return (
        <>
            <Carousel
                dragging={true}
                swiping={true}
                wrapAround={true}
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
        </>
    );
};

Gallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
