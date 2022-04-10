import React, { useState, useEffect } from 'react'
import baseUrl from '../api/baseUrl';
import './Shop.css';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';


const Shop = () => {
    const [data, setData] = useState([]);
    
    // const navigate=useNavigate();
    // const cart=()=>{
    //     navigate('/Cart')
    // }
    
    const apiGet = async() =>{    
        const {data} =  await baseUrl.get("/products/getAllProducts")
        console.log("data", data)
        setData(data);}
    useEffect(() => {
        apiGet();
    }, []);
    return (
        <><div className='head'>
        <h1>Products Collection </h1></div>
            <div className='list'>
                <div className='container'>
                 <div className='row'> 
                     {data.map(element =>
                      <div className='col-sm-4'>
                        <div key={element.id}>
                            <h3>{element.name}</h3>
                           {/* <Link to= {`/product/${element.id}`}> <img className="arrayImg" src={element.image} alt="" onClick={cart} /></Link> */}
                            <p>{element.description}</p>
                            <p>{element.brand}</p>
                            <p>{element.price}</p>
                            <p>{element.category}</p>
                        </div>  
                        </div> )}
                     </div>
                </div>
            </div>
        </>
    )
}

export default Shop;