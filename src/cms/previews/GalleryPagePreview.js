import React from 'react';
import PropTypes from 'prop-types';
import { GalleryPageTemplate } from '../../templates/GalleryPage';

const GalleryPagePreview = ({ entry, widgetFor }) => (
    <GalleryPageTemplate
        title={entry.toJS().data.title}
        subtitle={entry.toJS().data.subtitle}
        headerImage={entry.toJS().data.headerImage}
        content={widgetFor('body')}
        images={entry.toJS().data.images}
    />
);

GalleryPagePreview.propTypes = {
    entry: PropTypes.shape({
        toJS: PropTypes.func,
    }).isRequired,
    widgetFor: PropTypes.func.isRequired,
};

export default GalleryPagePreview;
