import React from 'react';
import PropTypes from 'prop-types';
import AddressItem from './AddressItem';

const ListAddress = ({ address }) => {
    const filteredAddressItems = Object.values(address).filter(item => '' !== item);

    return (
        <>
            <h2>Location</h2>
            {0 < filteredAddressItems.length &&
                filteredAddressItems.map((item, key) => {
                    return <AddressItem item={item} key={key} />;
                })}
        </>
    );
};

ListAddress.propTypes = {
    address: PropTypes.shape({
        company: PropTypes.string,
        addressLine1: PropTypes.string,
        addressLine2: PropTypes.string,
        province: PropTypes.string,
        postalCode: PropTypes.string,
        country: PropTypes.string,
    }).isRequired,
};

export default ListAddress;
