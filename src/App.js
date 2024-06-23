import React from 'react';
import Home from './home/Home';
import ProductList from './comp/ProductList';
import Product_page from './home/Product_page';
import Login_page from './home/Login_page';
import Register from './home/Register';
import Cart_page from './home/Cart_page';
import Filter_item from './comp/Filter_item';
import Admin from './home/Admin';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";   




function App() {
  let  user =  false ;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/products/:category" element={<Filter_item />} />
        <Route  path="/product/:id" element={<Product_page />} />
        <Route path="/login" element={user ? <Home /> : <Login_page />} /> //  when  user =  true then  it go to home page instant of login page 
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart_page />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
