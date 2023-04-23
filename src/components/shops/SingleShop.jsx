import React from 'react'
import './singleshop.scss'

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

export default SingleShop