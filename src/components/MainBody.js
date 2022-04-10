import React  from "react";
import './MainBody.css';
import { useNavigate } from "react-router-dom";


const MainBody=()=>{
    const navigate=useNavigate();
    const onClick=()=>{
        navigate('/Shop')
    }
    return(
        <> 
        <div className='text'>
            <div className="container">
            <div className="word">
            <h4>Winter fashion</h4>
            <h1>Fashion Collection</h1>
                <h1>2022</h1>
            <button type="button" className="btn btn-primary btn-lg" onClick={onClick}>Shop Now</button>
            </div>
            </div>
        </div>
        </>
    )
}
export default MainBody;