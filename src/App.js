import React, { useState } from 'react';
import 'antd/dist/antd.css';
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
import About from './pages/About/About'
import SignUp from "./pages/Account/SignUp"
import ConfirmEmail from "./pages/Account/ConfirmEmail"
import User from "./pages/Account/User"
import {Navigate, Route, Routes} from 'react-router-dom'

function App() {
  
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

  return (
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
            <Route path="/account" element={<Account chosenId={chosenId} handleChosenId={handleChosenId}/>}/>
            <Route path="/cart" element={<Cart a="123"/>}/>
            <Route path="/about" element={<About a="123"/>}/>
            <Route path="*" element={<Home/>}/>
		        <Route path="account/O/signUp" element={<SignUp a="123"/>}/>
            <Route path="account/O/signUp/O/confirmemail" element={<ConfirmEmail a="123"/>}/>
            <Route path="account/O/user" element={<User chosenId={chosenId} handleChosenId={handleChosenId} />}/>
          </Routes>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
