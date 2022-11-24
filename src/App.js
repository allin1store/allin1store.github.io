import React, { useState, useContext } from 'react';
import 'antd/dist/antd.min.css';
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css';
import './style_sboioi.css' // by grace
import Home from './pages/Home/Home'
import Shopping from './pages/Shopping/Shopping'
import Product from './pages/Shopping/Product'
import Order from './pages/Order/Order'
import Cart from './pages/Cart/Cart'
import Checkout from './pages/Checkout/Checkout'
import Account from './pages/Account/Account'
import Payment from './pages/Payment/Payment'
import PaymentDetail from './pages/PaymentDetail/PaymentDetail'
import OrderDetail from './pages/OrderDetail/OrderDetail'
import Signin from './pages/Signin/Signin';
import About from './pages/About/About'
import SignUp from "./pages/Signup/SignUp"
import {Navigate, Route, Routes} from 'react-router-dom'

export const AppContext = React.createContext({});


function App() {
  const [name, setName] = useState()
  const [number, setNumber] = useState();

  const getUsers =() => {
    fetch('/Users/users.json',
    {
        headers:{
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
        }
    })
    .then(res=>{
       return res.json();
    })
    .then(res => {
        console.log("load users", res);
        window.sessionStorage.setItem("preparedUser", JSON.stringify(res));
    })
  }

  const getLaptopData = () =>{

    let aRandomProductList = [];
    
    fetch('/bestbuyAPI/laptop/page1.json',
    {
        headers:{
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
        }
    })
    .then(res=>{
        return res.json();
    })
    .then(res=>{
        let hundardProducts = res.products;
        let ranIndex = Math.floor(Math.random() * 40);

        for(let i = 0; i < 3; i++){
            aRandomProductList[i] = {
                name: hundardProducts[ranIndex].name,
                sku: hundardProducts[ranIndex].sku,
                image: hundardProducts[ranIndex].image,
                manufacturer: hundardProducts[ranIndex].manufacturer,
                detail: hundardProducts[ranIndex].longDescription,
                regularPrice: hundardProducts[ranIndex].regularPrice,
                salePrice: hundardProducts[ranIndex].salePrice
            }
            ranIndex += 2;
        }
        window.sessionStorage.setItem("laptopList", JSON.stringify(aRandomProductList));
    })
}

const getDesktopData = () =>{

    let aRandomProductList = [];

    fetch('/bestbuyAPI/desktop/page1.json',
    {
        headers:{
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
        }
    })
    .then(res=>{
        return res.json();
    })
    .then(res=>{
        let hundardProducts = res.products;
        let ranIndex = Math.floor(Math.random() * 40);

        for(let i = 0; i < 3; i++){

            aRandomProductList[i] = {
                name: hundardProducts[ranIndex].name,
                sku: hundardProducts[ranIndex].sku,
                image: hundardProducts[ranIndex].image,
                manufacturer: hundardProducts[ranIndex].manufacturer,
                detail: hundardProducts[ranIndex].longDescription,
                regularPrice: hundardProducts[ranIndex].regularPrice,
                salePrice: hundardProducts[ranIndex].salePrice
            }
            ranIndex += 2;
        }
        window.sessionStorage.setItem("desktopList", JSON.stringify(aRandomProductList));
    })
}
const getTabletData = () =>{

    let aRandomProductList = [];

    fetch('/bestbuyAPI/tablet/page1.json',
    {
        headers:{
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
        }
    })
    .then(res=>{
        return res.json();
    })
    .then(res=>{
        let hundardProducts = res.products;
        let ranIndex = Math.floor(Math.random() * 40);

        for(let i = 0; i < 3; i++){

            aRandomProductList[i] = {
                name: hundardProducts[ranIndex].name,
                sku: hundardProducts[ranIndex].sku,
                image: hundardProducts[ranIndex].image,
                manufacturer: hundardProducts[ranIndex].manufacturer,
                detail: hundardProducts[ranIndex].longDescription,
                regularPrice: hundardProducts[ranIndex].regularPrice,
                salePrice: hundardProducts[ranIndex].salePrice
            }
            ranIndex += 20;
        }
        window.sessionStorage.setItem("tabletList", JSON.stringify(aRandomProductList));
    })
}

const getCategoryLaptopData = () => {
    fetch(`/bestbuyAPI/laptop/page1.json`,
        {
            headers:{
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
            }
        })
        .then(res=>{
            return res.json();
        })
        .then(res=>{
            let catProductList = res.products;
            window.sessionStorage.setItem("categoryLaptop", JSON.stringify(catProductList));
        })
}

const getCategoryTabletData = () => {
    fetch(`/bestbuyAPI/tablet/page1.json`,
        {
            headers:{
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
            }
        })
        .then(res=>{
            return res.json();
        })
        .then(res=>{
            let catProductList = res.products;
            window.sessionStorage.setItem("categoryTablet", JSON.stringify(catProductList));
        })
}

const getCategoryDesktopData = () => {
    fetch(`/bestbuyAPI/desktop/page1.json`,
        {
            headers:{
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
            }
        })
        .then(res=>{
            return res.json();
        })
        .then(res=>{
            let catProductList = res.products;
            window.sessionStorage.setItem("categoryDesktop", JSON.stringify(catProductList));
        })
}

getDesktopData();
getLaptopData();
getTabletData();
getCategoryDesktopData();
getCategoryLaptopData();
getCategoryTabletData();
getUsers();


  return (
    <AppContext.Provider value={{
        name, setName, number, setNumber
      }}>
    
    <div className="App">
      <Header></Header>
      <div style={{display: 'flex'}}>
        <Nav></Nav>
        <div className='routes' style={{background: '#EAEDED'}}>
          <Routes>
            <Route path="/" element={<Navigate to="/home"/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/shopping" element={<Shopping/>}/>
            <Route path="/product/:id" element={<Product/>} />
            <Route path="/order" element={<Order a="123"/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/account" element={<Account/>}/>
            <Route path="/cart" element={<Cart a="123"/>}/>
            <Route path="/about" element={<About a="123"/>}/>
            <Route path="*" element={<Home/>}/>
		    <Route path="/signup" element={<SignUp a="123"/>}/>
            <Route path="/account/payment" element={<Payment/>}/>
            <Route path="/detailPayment" element={<PaymentDetail/>}/>
            <Route path="/checkout" element={<Checkout/>}></Route>
            <Route path="/orderDetail" element={<OrderDetail/>}></Route>
          </Routes>
        </div>
      </div>
      <Footer></Footer>
    </div>
    </AppContext.Provider>
  );
}

export default App;
