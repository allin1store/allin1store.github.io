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
import Account from './pages/Account/Account'
import Signin from './pages/Signin/Signin';
import About from './pages/About/About'
import SignUp from "./pages/Signup/SignUp"
import {Navigate, Route, Routes} from 'react-router-dom'

export const AppContext = React.createContext({});


function App() {
  const [name, setName] = useState()
  
  const [ chosenItem, setChosenItem ] = useState("");
  const [chosenCategory, setChosenCategory] = useState("");

  const [chosenId, setChosenId] = useState("");
  
  const handleChosenCategory = (cat) =>{
    setChosenCategory(cat);
  }

  const handleChosenItem = (item) => {
    setChosenItem(item);
  }

  const handleChosenId = (id) => {
    setChosenId(id);
  }

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
        console.log("before setinto sessionstorage", aRandomProductList)
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

getDesktopData();
getLaptopData();
getTabletData();
getUsers();


  return (
    <AppContext.Provider value={{
        name, setName
      }}>
    
    <div className="App">
      <Header></Header>
      <div style={{display: 'flex'}}>
        <Nav handleChosenItem={handleChosenItem} handleChosenCategory={handleChosenCategory}></Nav>
        <div className='routes'>
          <Routes>
            <Route path="/" element={<Navigate to="/home"/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/shopping" 
                  element={<Shopping chosenItem={chosenItem} handleChosenItem={handleChosenItem} chosenCategory={chosenCategory} handleChosenCategory={handleChosenCategory}/>}
            />
            <Route path="/product/:id" element={<Product chosenItem={chosenItem} handleChosenItem={handleChosenItem}/>} />
            <Route path="/order" element={<Order a="123"/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/account" element={<Account chosenId={chosenId} handleChosenId={handleChosenId}/>}/>
            <Route path="/cart" element={<Cart a="123"/>}/>
            <Route path="/about" element={<About a="123"/>}/>
            <Route path="*" element={<Home/>}/>
		    <Route path="/signup" element={<SignUp a="123"/>}/>
          </Routes>
        </div>
      </div>
      <Footer></Footer>
    </div>
    </AppContext.Provider>
  );
}

export default App;
