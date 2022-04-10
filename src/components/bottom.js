import React from "react";
import {Link} from 'react-router-dom'
import './bottom.css';


const Bottom=()=>{
    return(
        <>
        <div className="end">
            <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h6>USEFUL LINKS</h6>
                    <Link to='/'>Contact Us</Link>
                    <Link to='/'>FAQ</Link>
                    <Link to='/'>T&C</Link>
                    <Link to='/'>Term Of Use</Link>
                    <Link to='/'>Privacy Policy</Link>
                </div>
                <div className="col-lg-6">
                <h6>EXPERIENCE WINTER APP ON MOBILE</h6>
                    <Link to='/'>Contact Us</Link>
                    <Link to='/'>FAQ</Link>
                    <Link to='/'>T&C</Link>
                    <Link to='/'>Term Of Use</Link>
                    <Link to='/'>Privacy Policy</Link>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Bottom;