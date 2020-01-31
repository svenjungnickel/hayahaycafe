import React from 'react';
import PropTypes from 'prop-types';

const AddressItem = ({ item }) => (
    <>
        {item}
        <br />
    </>
);

AddressItem.propTypes = {
    item: PropTypes.string.isRequired,
};

export default AddressItem;
