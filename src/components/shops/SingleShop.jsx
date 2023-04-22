import React from 'react'

function SingleShop({ shops }) {
  return (
    <li>
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