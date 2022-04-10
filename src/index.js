import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter,
  Routes,
  Route, } from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';
import MenSection from './components/MenSection';
import WomenSection from './components/WomenSection';
import KidsSection from './components/KidsSection';
import Shop from './components/Shop';
import Blog from './components/Blog';
import Contact from './components/Contact'
import Product from './components/Product/Product'



ReactDOM.render(
  <BrowserRouter>
    <App />
    <Routes>     
    <Route path='/' element={<Login/>} /> 
    <Route path='/Navbar' element={<Navbar/>} />
    <Route path='/MenSection' element={<MenSection/>} />
    <Route path='/MenSection/:id' element={<MenSection/>} />
    <Route path='/WomenSection' element={<WomenSection/>} />
    <Route path='/KidsSection' element={<KidsSection/>} />
    <Route path='/Shop' element={<Shop/>} />
    <Route path='/Blog' element={<Blog/>} />
    <Route path='/Contact' element={<Contact/>} />
    <Route path='/Product/:id' element={<Product/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
