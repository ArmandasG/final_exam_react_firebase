import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import SingleShop from "../components/shops/SingleShop";
import { Link } from "react-router-dom";
import './shopsPage.scss'
import { useAuthCtx } from "../store/AuthProvider";

function ShopsPage() {
  const {ui, isLoading, setIsLoading} = useAuthCtx()
  const [shopsArr, setShopsArr] = useState([]);
  useEffect(() => {
    async function getShops() {
      setIsLoading(true)
      try {
        const querySnapshot = await getDocs(collection(db, "shops"));
        const tempShops = [];
        querySnapshot.forEach((doc) => {
          tempShops.push({
            uid: doc.id,
            ...doc.data(),
          });
        });
        setShopsArr(tempShops);
        setIsLoading(false)
      } catch (error) {
        console.warn("getShops error", error.message);
        ui.showError('Only available for registered users')
      }
    }
    getShops();
  }, []);
  return (
    <section className="shops">
      <h1>Available shops</h1>
{isLoading && <div className="isLoadingShop"> <p>Loading...</p> </div>}
        {shopsArr.length !== 0 && !isLoading && (<ul className="shopItems"> {shopsArr.map((sObj) => (<SingleShop key={sObj.uid} shops={sObj} />))} </ul>)
          }
      
      {shopsArr.length === 0 && !isLoading && (
        <div className="noShops">
          <h2>There are no available shops</h2>
          <Link className="tryAdding" to={"/shops/new"}>Try adding one</Link>
        </div>
      )}
    </section>
  );
}

export default ShopsPage;
