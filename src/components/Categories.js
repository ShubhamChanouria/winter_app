import React from "react";
import { useNavigate } from "react-router-dom";
import './categories.css';

const Categories=()=>{
    const navigate = useNavigate()
    const onimageClick= () =>{
        navigate('/MenSection')
    }
    const onClick= () =>{
        navigate('/WomenSection')
    }
    const onlinkClick= () =>{
        navigate('/KidsSection')
    }
    return(
        <>
        <div className='container'>
        <div className='row'>
        <div className="col-lg-4">
            <div className="men" onClick={onimageClick}>
            <h1>Men</h1>
            <p>Flat 30% off</p>
            </div>
        </div>
        <div className="col-lg-4">
        <div className="women" onClick={onClick}>
            <h1>Women</h1>
            <p>Flat 50% off</p>
        </div>
        </div>
        <div className="col-lg-4">
        <div className="kids" onClick={onlinkClick}>
            <h1>Kids</h1>
            <p>Flat 30% off</p>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}
export default Categories;