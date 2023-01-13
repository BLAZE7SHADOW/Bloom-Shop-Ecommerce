import React from 'react';
import './App.css';
import Navbar from './components/NAVBAR/Navbar';
import Footer from './components/FOOTER/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './LOGIN/Login';
import Main from './components/MAIN-BODY/Main';
import { useGlobalLogin } from './context/login-context';
import { ToastContainer } from 'react-toastify';
import Cart from './components/CART/Cart';
import SingleProduct from './components/SINGLE-PRODUCT/SingleProduct';
import Wishlist from './components/WISHLIST/Wishlist';
import Aproduct from './components/ALLPRODUCT/APRODUCT/Aproduct';



function App() {

  const myName = useGlobalLogin();

  return (

    <div className="App">

      <Navbar />
      {/* <Aproduct /> */}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/single-product/:id' element={<SingleProduct />} />
        <Route path='/wishlist' element={<Wishlist />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>

  );
}

export default App;
