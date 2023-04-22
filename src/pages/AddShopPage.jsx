import React from 'react'
import AddShopForm from '../components/shops/addShopForm'
import { Link, useNavigate } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import "./loginAndRegister.scss";

function AddShopPage() {
  const navigate = useNavigate()
  async function addShop(newShopObj) {
    try {
      const docRef = await addDoc(collection(db, 'shops'), newShopObj)
    navigate('/shops')
    } catch (error) {
      console.warn(error);
    }
  }
  return (
    <div className="innerFormEl">
      <h1>Add a shop</h1>
      <AddShopForm onAdd={addShop} />
      <div className="additional">
        <p>Don't have a shop to add ?</p>
        <Link to={"/register"}>
          {" "}
          <span>Go back</span>{" "}
        </Link>
      </div>
    </div>
  )
}

export default AddShopPage