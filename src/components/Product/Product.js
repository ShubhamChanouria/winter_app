import React, { useEffect, useState } from 'react';
import baseUrl from '../../api/baseUrl';
import {
  useParams
} from "react-router-dom";
import '../MenSection.css'
const Cart = () => {
  const [data, setData] = useState([]);
useParams();
  console.log("slug", useParams())
  const apiGet = async () => {
    const { data } = await baseUrl.get('/products/')
    console.log("data", data)
    setData(data);
  }

  useEffect(() => {
    apiGet();
  }, []);
  return (
   <> 
            <div className="heading">
                <h1> Single Product </h1>
            </div>
            <div className="top">
                <div className="container">
                    <div className="row">
                        {data.map(element =>
                            <div className='col-sm-6'>
                                <div key={element.id}>
                                   <h3>{element.category}</h3>
                                    <img className="arrayImg" src={element.image} alt="" />
                                    <p>{element.description}</p>
                                    <p>{element.price}</p>
                                </div>
                            </div>)}</div> </div>
            </div>
        </>
  )
}
export default Cart;