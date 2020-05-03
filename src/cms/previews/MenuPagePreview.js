import React from 'react';
import PropTypes from 'prop-types';
import { MenuPageTemplate } from '../../templates/MenuPage';

const MenuPagePreview = ({ entry, widgetFor }) => (
    <MenuPageTemplate
        title={entry.toJS().data.title}
        subtitle={entry.toJS().data.subtitle}
        headerImage={entry.toJS().data.headerImage}
        content={widgetFor('body')}
        images={entry.toJS().data.images}
    />
);

MenuPagePreview.propTypes = {
    entry: PropTypes.shape({
        toJS: PropTypes.func,
    }).isRequired,
    widgetFor: PropTypes.func.isRequired,
};

export default MenuPagePreview;
