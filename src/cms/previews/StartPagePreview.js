import React from 'react';
import PropTypes from 'prop-types';
import StartPageTemplate from '../../templates/StartPageTemplate';

const StartPagePreview = ({ entry, widgetFor }) => (
    <StartPageTemplate
        title={entry.toJS().data.title}
        subtitle={entry.toJS().data.subtitle}
        headerImage={entry.toJS().data.headerImage}
        content={widgetFor('body')}
        location={widgetFor('location')}
        openingHours={widgetFor('openingHours')}
    />
);

StartPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
};

export default StartPagePreview;
