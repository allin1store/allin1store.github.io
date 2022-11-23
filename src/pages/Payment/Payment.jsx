import CartCss from "./CartCss.module.css"
import { Breadcrumb, Button } from "antd";
import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import {AppContext} from "../../App.js";

const Cart = (props) => {
    const navigate = useNavigate();
    const { number, setNumber } = useContext(AppContext);
   let user = JSON.parse(window.sessionStorage.getItem("currentUser"));
    console.log(user.cart);
   const [cart, setCart] = useState([]);

   useEffect(()=>{
       setCart(user.cart);
   },[]);
   
   function remove(it, ind) {
        cart.splice(ind, 1);
        setCart(cart);
        user.cart = cart;
        window.sessionStorage.setItem("currentUser", JSON.stringify(user));
        setNumber(number - 1);
   }

   function clear() {
        cart.splice(0, cart.length);
        setCart(cart);
        user.cart = cart;
        window.sessionStorage.setItem("currentUser", JSON.stringify(user));
        setNumber(0);
   }
    return <div className={CartCss.container}>
        <Breadcrumb className={CartCss.crumb}>
            <Breadcrumb.Item onClick={()=> navigate("/cart")} style={{cursor: 'pointer'}}>Cart</Breadcrumb.Item>
        </Breadcrumb>
        <div className={CartCss.main}>
            <div className={CartCss.left}>
                {cart.map((item, index) => (
                    <div className={CartCss.item} key={item.image + index}>
                        <div className={CartCss.img}>
                            <img alt={item.name} src={item.image}/>
                        </div>
                        <div>
                            <div className={CartCss.name}>
                                {item.name}
                            </div>
                            <div  className={CartCss.else}>
                                <span className={CartCss.manu}>
                                    {item.manufacturer}
                                </span>
                                <span className={CartCss.price}>
                                    $ {item.salePrice}
                                </span>
                                <span style={{fontWeight: 'bolder'}}>
                                    Quantity: 1
                                </span>
                            </div>
                        </div>
                        <Button type="default" htmlType="button" onClick={() => remove(item, index)}>
                            Remove
                        </Button>
                    </div>
                ))}
            
            </div>
            <div className={CartCss.right}>
                <span className={CartCss.caption}>Operations</span>
                <br></br><br></br>
                <Button danger type="primary" className={CartCss.buttons} onClick={() => clear()}>Empty &nbsp;Chart</Button>
                <br></br><br></br>
                <Button type="primary" className={CartCss.buttons}>Proceed to Checkout</Button>
            </div>
        </div>
    </div>;
    
}


export default Cart;