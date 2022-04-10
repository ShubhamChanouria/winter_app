import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Brands.css';

const Brands = () => {
    const navigate=useNavigate();
    const onClick=()=>{
        navigate('')
    }
    return (
        <><div className='container-fluid'>
            <div className='row' >
                <div className='col-lg-3'>
                    <div className='levi' onClick={onClick}>
                    </div>
                </div>
                <div className='col-lg-3'>
                    <div className='adidas'>
                    </div>
                </div>
                <div className='col-lg-3'>
                    <div className='nike'>
                    </div>
                </div>
                <div className='col-lg-3'>
                    <div className='jack'>
                    </div>
                </div>
            </div>
        </div>
        <div className='container-fluid-two'>
            <div className='row' >
                <div className='col-lg-3'>
                    <div className='puma' onClick={onClick}>
                    </div>
                </div>
                <div className='col-lg-3'>
                    <div className='hm'>
                    </div>
                </div>
                <div className='col-lg-3'>
                    <div className='zara'>
                    </div>
                </div>
                <div className='col-lg-3'>
                    <div className='wood'>
                    </div>
                </div>
            </div>
        </div>
        </>       
    )
}
export default Brands;