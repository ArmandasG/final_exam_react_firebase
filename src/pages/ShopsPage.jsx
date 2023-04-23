import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import SingleShop from "../components/shops/SingleShop";
import { Link } from "react-router-dom";
import './shopsPage.scss'

function ShopsPage() {
  const [shopsArr, setShopsArr] = useState([]);

  useEffect(() => {
    async function getShops() {
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
      } catch (error) {
        console.warn("getShops error", error.message);
      }
    }
    getShops();
  }, []);
  return (
    <section className="shops">
      <h1>Available shops</h1>
        {shopsArr.length !== 0 && (<ul className="shopItems"> {shopsArr.map((sObj) => (<SingleShop key={sObj.uid} shops={sObj} />))} </ul>)
          }
      
      {shopsArr.length === 0 && (
        <div>
          <h2>There are no available shops</h2>
          <Link to={"/shops/new"}>Try adding one</Link>
        </div>
      )}
    </section>
  );
}

export default ShopsPage;
