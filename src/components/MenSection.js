import React, { useState, useEffect } from "react";
import './Shop.css';
import baseUrl from "../api/baseUrl";
import { Link } from "react-router-dom";

const MenSection = () => {
    const [data, setData] = useState([]);

    const apiGet = async () => {
        const { data } = await baseUrl.get("/products")
        console.log("data", data)
        setData(data);
    }
    useEffect(() => {
        apiGet();
    }, []);
    return (
        <>
            <div className="heading">
                <h1> Men's Clothing </h1>
            </div>
            <div className="top">
                <div className="container">
                    <div className="row">
                        {data.slice(0,4).map(element =>
                         
                            <div className='col-sm-6'>
                                <div key={element.id}>
                                    <h3>{element.category}</h3>
                                    <Link to={'./Cart/:id'+ element.id}>  <img className="arrayImg" src={element.image} alt="" /></Link>
                                    <p>{element.description}</p>
                                    <p>{element.price}</p>
                                </div>
                            </div>)}</div> </div>
            </div>
        </>
    )
}
export default MenSection;