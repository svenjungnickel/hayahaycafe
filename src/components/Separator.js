import React from 'react';
import PropTypes from 'prop-types';
import { separator } from '../styles/components/Separator.module.scss';

const Separator = ({ className }) => (
    <div className={'' !== className ? `${separator} ${className}` : `${separator}`}>
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
