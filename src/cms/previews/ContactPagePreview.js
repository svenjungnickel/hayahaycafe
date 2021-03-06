import React from 'react';
import PropTypes from 'prop-types';
import { ContactPageTemplate } from '../../templates/ContactPage';

const ContactPagePreview = ({ entry, widgetFor }) => (
    <ContactPageTemplate
        title={entry.toJS().data.title}
        subtitle={entry.toJS().data.subtitle}
        headerImage={entry.toJS().data.headerImage}
        content={widgetFor('body')}
    />
);

ContactPagePreview.propTypes = {
    entry: PropTypes.shape({
        toJS: PropTypes.func,
    }).isRequired,
    widgetFor: PropTypes.func.isRequired,
};

export default ContactPagePreview;
