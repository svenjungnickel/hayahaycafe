import React from 'react';
import PropTypes from 'prop-types';
import ReactSwitch from 'react-switch';

const Switch = props => <ReactSwitch {...props} />;

Switch.defaultProps = {
    checkedIcon: false,
    uncheckedIcon: false,
    height: 24,
    width: 48,
    handleDiameter: 24,
    offColor: `#000`,
    onColor: `#000`,
    boxShadow: `inset 0 0 0 1px #000`,
};

const uncheckedIcon = (
    <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            fontSize: 15,
            color: 'yellow',
            paddingLeft: 2,
        }}
    >
        ☀
    </div>
);

const checkedIcon = (
    <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            fontSize: 15,
            color: 'yellow',
            paddingRight: 2,
        }}
    >
        ☾
    </div>
);

const DarkModeToggle = ({ darkMode, className }) => {
    const darkModeValue = null !== darkMode.value ? darkMode.value : false;

    return (
        <Switch
            className={className}
            title="dark mode switch"
            aria-checked={darkModeValue}
            checked={darkModeValue}
            onChange={darkMode.toggle}
            uncheckedIcon={uncheckedIcon}
            checkedIcon={checkedIcon}
        />
    );
};

DarkModeToggle.propTypes = {
    darkMode: PropTypes.object.isRequired,
    className: PropTypes.string,
};

export default DarkModeToggle;
