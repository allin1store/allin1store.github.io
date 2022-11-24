import OrderDetailCss from "./OrderDetail.module.css"
import { Breadcrumb, Button, Form, Input, Timeline} from "antd";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";


const Order = (props) => {
    const navigate = useNavigate();
    let order = JSON.parse(window.sessionStorage.getItem("currentOrder"));
    
    function getTotalPrice() {
        let price = 0;
        for (let i = 0; i < order.items.length; i++) {
            price += order.items[i].salePrice;
        }
        console.log("total", price);
        return price;
    }

    return <div className={OrderDetailCss.container}>
    <Breadcrumb className={OrderDetailCss.crumb}>
        <Breadcrumb.Item onClick={()=> navigate("/order")} style={{cursor: 'pointer'}}>Order History</Breadcrumb.Item>
        <Breadcrumb.Item onClick={()=> navigate("/orderDetail")} style={{cursor: 'pointer'}}>Order Details</Breadcrumb.Item>
    </Breadcrumb>
    <div className={OrderDetailCss.main}>
        <div className={OrderDetailCss.left}>
            <div className={OrderDetailCss.step1}>
            <div>
                <Timeline>
                    <Timeline.Item>Created</Timeline.Item>
                    <Timeline.Item>Paid</Timeline.Item>
                    <Timeline.Item color={order.status == 3?"gray":"blue"}>Delivery</Timeline.Item>
                    <Timeline.Item color={order.status == 3?"gray":"blue"}>Delivered</Timeline.Item>
                </Timeline>
            </div>
            <div className={OrderDetailCss.info}>
                <span className={OrderDetailCss.item1}>
                    <span style={{display: "flex", justifyContent: "space-around"}}>
                        <span style={{width: "200px"}}>
                            <label>Order Number:</label><br></br>
                            <span>{order.number}</span>
                        </span>
                        <span style={{width: "200px"}}>
                            <label>Payment method:</label><br></br>
                            <span>{order.payment}</span>
                        </span>
                    </span>
                </span>
                <span className={OrderDetailCss.item1}>
                    <span style={{display: "flex", justifyContent: "space-around"}}>
                        <span style={{width: "200px"}}>
                            <label>Placed Time:</label><br></br>
                            <span>{order.placed_time}</span>
                        </span>
                        <span style={{width: "200px"}}>
                            <label>Deliverd Time:</label><br></br>
                            <span>{order.status == 5? order.delivered_time: ""}</span>
                        </span>
                    </span>
                </span>
                <span className={OrderDetailCss.item1}>
                    <span style={{display: "flex", justifyContent: "space-around"}}>
                        <span style={{width: "200px"}}>
                            <label>Order Price:</label><br></br>
                            <span>$ {getTotalPrice()}</span>
                        </span>
                        <span style={{width: "200px"}}>
                            <label>Total Price:</label><br></br>
                            <span>$ {getTotalPrice() * 1.1}</span>
                        </span>
                    </span>
                </span>
            </div>
            </div>
            <div className={OrderDetailCss.step2}>
            {order.items.map((item, index) => (
                    <div className={OrderDetailCss.item} key={item.image + index}>
                        <div className={OrderDetailCss.img}>
                            <img alt={item.name} src={item.image}/>
                        </div>
                        <div>
                            <div className={OrderDetailCss.name}>
                                {item.name}
                            </div>
                            <div  className={OrderDetailCss.else}>
                                <span className={OrderDetailCss.manu}>
                                    {item.manufacturer}
                                </span>
                                <span className={OrderDetailCss.price}>
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
        <div className={OrderDetailCss.right}>
            <span className={OrderDetailCss.caption}>Operations</span>
            <br></br><br></br>
            <Button danger type="primary"  className={OrderDetailCss.buttons}>Request a refund</Button>
        </div>
    </div>
</div>;
}


export default Order;