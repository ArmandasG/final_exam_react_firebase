import React from 'react'
import './singleshop.scss'
import PropTypes from 'prop-types';

function SingleShop({ shops }) {
  return (
    <li className='singleShopItem'>
        <div>
            <img src={shops.ImageUrl} alt={shops.shopName} />
        </div>
        <h3>{shops.shopName}</h3>
        <div>
            <p>{shops.town}</p>
            <p>{shops.startYear}</p>
            <p>{shops.description}</p>
        </div>
    </li>
  )
}

SingleShop.propTypes = {
  shops: PropTypes.object,
};

export default SingleShop