import CheckoutCss from "./Checkout.module.css"
import { Breadcrumb, Button, Card, Radio} from "antd";
import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

const Checkout = (props) => {
    const navigate = useNavigate();
    let user = JSON.parse(window.sessionStorage.getItem("currentUser"));
    const [payment, setPayment] = useState([]);
    const [cart, setCart] = useState([]);

    const [value, setValue] = useState(1);

   useEffect(()=>{
       setPayment(user.payment);
       setCart(user.cart);
   },[]);

   function onChange(e) {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
   }

    function placeOrder() {
        console.log(cart);
        let order = {
            "number": "20221124XXXXX",
            "status": 3,
            "placed_time": "2022-11-24",
            "delivered_time": "2022-12-20",
            "payment": "5100910051003189",
            "items":cart
        };
        window.sessionStorage.setItem("currentOrder", JSON.stringify(order));
        navigate("/orderDetail");
    }
   
    return <div className={CheckoutCss.container}>
        <Breadcrumb className={CheckoutCss.crumb}>
            <Breadcrumb.Item onClick={()=> navigate("/cart")} style={{cursor: 'pointer'}}>Cart</Breadcrumb.Item>
            <Breadcrumb.Item onClick={()=> navigate("/checkout")} style={{cursor: 'pointer'}}>Checkout</Breadcrumb.Item>
        </Breadcrumb>
        <div className={CheckoutCss.main}>
            <div className={CheckoutCss.left}>
                <div className={CheckoutCss.step1}>
                    <span className={CheckoutCss.caption}>
                        1. Shipping address
                    </span>
                    <br></br><br></br>
                    <div>{user.firstName}&nbsp;&nbsp;{user.lastName}</div>
                    <br></br>
                    <div>{user.phoneNumber}</div>
                    <br></br>
                    <div>{user.address}</div>
                </div>
                <div className={CheckoutCss.step2}>
                    <span className={CheckoutCss.caption}>
                        2. Payment method
                    </span>
                    <br></br><br></br>
                    <Radio.Group onChange={(e) => onChange(e)} value={value}>
                    {payment.map((item1, index) => (
                        <Radio value={item1.number} key={item1.number}>
                            <div className={CheckoutCss.item1} key={item1.image + index}>
                            <Card bordered={false} className={index/2 ==0 ?CheckoutCss.card: CheckoutCss.card2}>
                                <p>{item1.type}</p>
                                <p>{item1.name} &nbsp;&nbsp;&nbsp; {"****  " + item1.number.substr(12)} </p>
                            </Card>
                            </div>
                        </Radio>
                    ))}
                    </Radio.Group>
                </div>
                <div className={CheckoutCss.step3}>
                    <span className={CheckoutCss.caption}>
                        3. Review items
                    </span>
                    {cart.map((item, index) => (
                    <div className={CheckoutCss.item} key={item.image + index}>
                        <div className={CheckoutCss.img}>
                            <img alt={item.name} src={item.image}/>
                        </div>
                        <div>
                            <div className={CheckoutCss.name}>
                                {item.name}
                            </div>
                            <div  className={CheckoutCss.else}>
                                <span className={CheckoutCss.manu}>
                                    {item.manufacturer}
                                </span>
                                <span className={CheckoutCss.price}>
                                    $ {item.salePrice}
                                </span>
                                <span style={{fontWeight: 'bolder'}}>
                                    Quantity: 1
                                </span>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className={CheckoutCss.right}>
                <span className={CheckoutCss.caption}>Operations</span>
                <br></br><br></br>
                <Button type="primary" className={CheckoutCss.buttons} onClick={() => placeOrder()}>Place your order</Button>
            </div>
        </div>
    </div>;
    
}


export default Checkout;