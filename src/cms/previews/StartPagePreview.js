import React from 'react';
import PropTypes from 'prop-types';
import { StartPageTemplate } from '../../templates/StartPage';

const StartPagePreview = ({ entry, widgetFor }) => (
    <StartPageTemplate
        title={entry.toJS().data.title}
        subtitle={entry.toJS().data.subtitle}
        headerImage={entry.toJS().data.headerImage}
        content={widgetFor('body')}
        gallery={entry.toJS().data.gallery}
    />
);

StartPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }).isRequired,
    widgetFor: PropTypes.func.isRequired,
};

export default StartPagePreview;
