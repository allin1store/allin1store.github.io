import CheckoutCss from "./Checkout.module.css"
import { Breadcrumb, Button, Card} from "antd";
import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

const Checkout = (props) => {
    const navigate = useNavigate();
    let user = JSON.parse(window.sessionStorage.getItem("currentUser"));
    const [payment, setPayment] = useState([]);

   useEffect(()=>{
       setPayment(user.payment);
   },[]);
   

    return <div className={CheckoutCss.container}>
        <Breadcrumb className={CheckoutCss.crumb}>
            <Breadcrumb.Item onClick={()=> navigate("/cart")} style={{cursor: 'pointer'}}>Cart</Breadcrumb.Item>
            <Breadcrumb.Item onClick={()=> navigate("/checkout")} style={{cursor: 'pointer'}}>Checkout</Breadcrumb.Item>
        </Breadcrumb>
        <div className={CheckoutCss.main}>
            <div className={CheckoutCss.left}>
                <div>
                    <span className={CheckoutCss.caption}>
                        1. Shipping address
                    </span>
                    <span>{user.name}</span>
                    <span>{user.phone}</span>
                    <span>{user.address}</span>
                </div>


                {payment.map((item, index) => (
                    <div className={CheckoutCss.item} key={item.image + index}>
                        <Card bordered={false} className={index/2 ==0 ?CheckoutCss.card: CheckoutCss.card2}>
                            <p>{item.type}</p>
                            <p>{item.name} &nbsp;&nbsp;&nbsp; {"****  " + item.number.substr(12)} </p>
                        </Card>
                        <div className={CheckoutCss.buttonGroup}>
                            <Button type="default" htmlType="button">
                                Remove
                            </Button>
                            <Button type="default" htmlType="button">
                                Edit
                            </Button>
                        </div>
                        
                    </div>
                ))}
            
            </div>
            <div className={CheckoutCss.right}>
                <span className={CheckoutCss.caption}>Operations</span>
                <br></br><br></br>
                <Button type="primary" className={CheckoutCss.buttons} onClick={() => navigate("/orderDetail")}>Place your order</Button>
            </div>
        </div>
    </div>;
    
}


export default Checkout;