import React from 'react'
import AddShopForm from '../components/shops/addShopForm'
import { Link, useNavigate } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import "./addRegisterShopPage.scss";
import { useAuthCtx } from '../store/AuthProvider'

function AddShopPage() {
  const navigate = useNavigate()
  const {setIsLoading, ui} = useAuthCtx()
  async function addShop(newShopObj) {
    ui.showLoading()
    setIsLoading(true)
    try {
      const docRef = await addDoc(collection(db, 'shops'), newShopObj)
      setIsLoading(false)
      ui.showSuccess('A shop has been successfully added')
    navigate('/shops')
    } catch (error) {
      console.warn(error);
      ui.showError('Shop has not been added')
      setIsLoading(false)
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