import React from 'react';
import PropTypes from 'prop-types';
import AddressItem from './AddressItem';
import ListAddressStyles from '../../styles/components/Location/ListAddress.module.scss';

const ListAddress = ({ address }) => {
    const filteredAddressItems = Object.values(address).filter((item) => '' !== item);

    return (
        <div className={ListAddressStyles.listAddress}>
            <h2>Location</h2>
            {0 < filteredAddressItems.length &&
                filteredAddressItems.map((item, key) => {
                    return <AddressItem item={item} key={key} />;
                })}
        </div>
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
