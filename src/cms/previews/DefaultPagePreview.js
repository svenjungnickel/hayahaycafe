import React from 'react';
import PropTypes from 'prop-types';
import DefaultPageTemplate from '../../templates/DefaultPageTemplate';

const DefaultPagePreview = ({ entry, widgetFor }) => (
    <DefaultPageTemplate
        title={entry.toJS().data.title}
        subtitle={entry.toJS().data.subtitle}
        headerImage={entry.toJS().data.headerImage}
        content={widgetFor('body')}
    />
);

DefaultPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
};

export default DefaultPagePreview;
