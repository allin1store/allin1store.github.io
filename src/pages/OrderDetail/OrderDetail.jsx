import OrderDetailCss from "./OrderDetail.module.css"
import { Breadcrumb, Button, Form, Input, Select, Timeline} from "antd";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";


const Order = (props) => {
    const navigate = useNavigate();
    let order = JSON.parse(window.sessionStorage.getItem("currentOrder"));
    
    return <div className={OrderDetailCss.container}>
    <Breadcrumb className={OrderDetailCss.crumb}>
        <Breadcrumb.Item onClick={()=> navigate("/order")} style={{cursor: 'pointer'}}>Order History</Breadcrumb.Item>
        <Breadcrumb.Item onClick={()=> navigate("/orderDetail")} style={{cursor: 'pointer'}}>Order Detail</Breadcrumb.Item>
    </Breadcrumb>
    <div className={OrderDetailCss.main}>
        <div className={OrderDetailCss.left}>
        <Timeline>
            <Timeline.Item>Created</Timeline.Item>
            <Timeline.Item>Paid</Timeline.Item>
            <Timeline.Item color={order.status == 3?"gray":"blue"}>Delivery</Timeline.Item>
            <Timeline.Item color={order.status == 3?"gray":"blue"}>Delivered</Timeline.Item>
        </Timeline>
        
        </div>
        <div className={OrderDetailCss.right}>
            <span className={OrderDetailCss.caption}>Operations</span>
            <br></br><br></br>
        </div>
    </div>
</div>;
}


export default Order;