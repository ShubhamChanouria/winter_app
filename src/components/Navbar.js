import React from 'react';
import './Navbar.css';
import MainBody from './MainBody';
import Categories from './Categories';
import Bottom from './bottom';
import Brands from './Brands';
import { useNavigate } from 'react-router-dom';



const Navbar = ()=>{
  const navigate=useNavigate();
  const onClick=()=>{
    navigate('/Shop')
  }
  const onHomeClick=()=>{
    navigate('/')
  }
  const onBlog=()=>{
    navigate('/Blog')
  }
  const onContact=()=>{
    navigate('/Contact')
  }
    return(
        <>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Winter</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" onClick={onHomeClick} >Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="#"></a>
        </li> */}
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#" onClick={onClick}>Shop</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#" onClick={onBlog}>Blog</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#" onClick={onContact}>Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        <MainBody/>
        <Categories/>
        <Brands/>
        <Bottom/>
        </>
    )
}

export default Navbar;