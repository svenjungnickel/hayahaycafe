import React from 'react';
import PropTypes from 'prop-types';
import ContactPageTemplate from '../../templates/ContactPageTemplate';

const ContactPagePreview = ({ entry, widgetFor }) => (
    <ContactPageTemplate
        title={entry.toJS().data.title}
        subtitle={entry.toJS().data.subtitle}
        headerImage={entry.toJS().data.headerImage}
        content={widgetFor('body')}
        what3WordsAddress={entry.toJS().data.what3WordsAddress}
        what3wordsIcon={entry.toJS().data.what3wordsIcon}
    />
);

ContactPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
};

export default ContactPagePreview;
