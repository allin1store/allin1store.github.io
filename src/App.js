import React from 'react';
import 'antd/dist/antd.css';
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css';
import './style.css' // by grace
import Home from './pages/Home/Home'
import Shopping from './pages/Shopping/Shopping'
import Product from './pages/Shopping/Product'
import Category from './pages/Shopping/Category';
import Order from './pages/Order/Order'
import Cart from './pages/Cart/Cart'
import Account from './pages/Account/Account'
import About from './pages/About/About'
import {Navigate, Route, Routes} from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
      <Header></Header>
      <div style={{display: 'flex'}}>
        <Nav></Nav>
        <div className='routes'>
          <Routes>
            <Route path="/" element={<Navigate to="/home"/>} />
            <Route path="/home" element={<Home Category={<Category/>} Product={<Product/>} />} />
            <Route path="/shopping" element={<Shopping Category={<Category/>} Product={<Product/>}/>}/>
            <Route path="/order" element={<Order a="123"/>}/>
            <Route path="/account" element={<Account a="123"/>}/>
            <Route path="/cart" element={<Cart a="123"/>}/>
            <Route path="/about" element={<About a="123"/>}/>
          </Routes>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
