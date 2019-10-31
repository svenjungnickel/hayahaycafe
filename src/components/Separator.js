import React from 'react';
import PropTypes from 'prop-types';
import SeparatorStyles from '../styles/components/Separator.module.scss';

const Separator = ({ className }) => (
    <div className={'' !== className ? `${SeparatorStyles.separator} ${className}` : `${SeparatorStyles.separator}`}>
        <hr />
    </div>
);

Separator.defaultProps = {
    className: '',
};

Separator.propTypes = {
    className: PropTypes.string,
};

export default Separator;
