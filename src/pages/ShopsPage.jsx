import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import SingleShop from "../components/shops/SingleShop";
import { Link } from "react-router-dom";

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
          ...doc.data()
        })
      });
      setShopsArr(tempShops)
      } catch (error) {
        console.warn('getShops error', error.message)
      }
      
    }
    getShops();
  }, []);
  return <section>
    {shopsArr !== [] && shopsArr.map((sObj) => (
      <ul>
      <SingleShop key={sObj.uid} shops={sObj} />
      </ul>
    ))}
    {shopsArr === [] && 
    <div>
      <h2>There are no available shops</h2>
      <Link to={'/shops/new'}>Try adding one</Link>
    </div> }
  </section>;
}

export default ShopsPage;
