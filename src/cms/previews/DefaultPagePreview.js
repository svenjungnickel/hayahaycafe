import React from 'react';
import PropTypes from 'prop-types';
import { DefaultPageTemplate } from '../../templates/DefaultPage';

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
        toJS: PropTypes.func.isRequired,
    }).isRequired,
    widgetFor: PropTypes.func.isRequired,
};

export default DefaultPagePreview;
