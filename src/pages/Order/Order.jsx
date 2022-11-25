import OrderCss from "./Order.module.css"
import { Breadcrumb, Button, Card} from "antd";
import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

const Order = (props) => {
    const navigate = useNavigate();
    let user = JSON.parse(window.sessionStorage.getItem("currentUser"));
    const [orders, setOrders] = useState([]);
    
   useEffect(()=>{
       setOrders((user == null || user == undefined) ? "" : user.order.reverse());
   },[]);
   
    if (user == null || user == undefined) {
        return <div>
        You are not logged in.
        <Button type="default" htmlType="submit" onClick={() => navigate("/signin")}>
        Sign in
        </Button>
    </div>;
    }

    function getTotalPrice(cart) {
        let price = 0;
        for (let i = 0; i < cart.length; i++) {
            price += cart[i].salePrice;
        }
        console.log("total", price);
        return price;
    }

    function goToDetail(item) {
        console.log("go to detail", item);
        window.sessionStorage.setItem("currentOrder", JSON.stringify(item));
        navigate("/orderDetail");
    }
    return <div className={OrderCss.container}>
        <Breadcrumb className={OrderCss.crumb}>
            <Breadcrumb.Item onClick={()=> navigate("/account")} style={{cursor: 'pointer'}}>Account</Breadcrumb.Item>
            <Breadcrumb.Item onClick={()=> navigate("/order")} style={{cursor: 'pointer'}}>Orders History</Breadcrumb.Item>
        </Breadcrumb>
        <div className={OrderCss.main}>
            <div className={OrderCss.left}>
                {orders.map((item, index) => (
                    <div className={OrderCss.item} key={item.number + index} >
                        <Card titlebordered={false} className={OrderCss.card} extra={<span style={{color: "blue", fontWeight: "bold"}}>{item.status == 3? "Paid" : "Delivered"}</span>}
                        title={<a href="#" onClick={() => goToDetail(item)} style={{cursor: "pointer"}}>Order Number:   #{item.number}</a>}>
                            <div style={{display: "flex", width: "670px", justifyContent: "space-between"}}>
                                <div>
                                    <p>Order Placed: {item.placed_time}</p>
                                    <p>Total:  $ {getTotalPrice(item.items)*1.1}</p>
                                    <p>Ship to:  {user.firstName + " " + user.lastName}</p>
                                    <p>Delivered:  {item.delivered_time}</p>
                                </div>
                                <div>
                                <img alt={item.items[0].name} src={item.items[0].image}/>
                                </div>
                            </div>
                        </Card>                        
                    </div>
                ))}
            
            </div>
            <div className={OrderCss.right}>
                <span className={OrderCss.caption}>Operations</span>
                <br></br><br></br>
                <Button type="default" className={OrderCss.buttons}>Problem with orders</Button>
                <Button type="default" className={OrderCss.buttons}>Customer service</Button>
            </div>
        </div>
    </div>;
    
}


export default Order;