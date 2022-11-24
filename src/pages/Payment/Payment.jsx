import PaymentCss from "./Payment.module.css"
import { Breadcrumb, Button, Card} from "antd";
import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

const Payment = (props) => {
    const navigate = useNavigate();
    let user = JSON.parse(window.sessionStorage.getItem("currentUser"));
    const [payment, setPayment] = useState([]);

   useEffect(()=>{
       setPayment(user.payment);
   },[]);
   

    return <div className={PaymentCss.container}>
        <Breadcrumb className={PaymentCss.crumb}>
            <Breadcrumb.Item onClick={()=> navigate("/account")} style={{cursor: 'pointer'}}>Account</Breadcrumb.Item>
            <Breadcrumb.Item onClick={()=> navigate("/account/payment")} style={{cursor: 'pointer'}}>Payments</Breadcrumb.Item>
        </Breadcrumb>
        <div className={PaymentCss.main}>
            <div className={PaymentCss.left}>
                {payment.map((item, index) => (
                    <div className={PaymentCss.item} key={item.image + index}>
                        <Card bordered={false} className={index/2 ==0 ?PaymentCss.card: PaymentCss.card2}>
                            <p>{item.type}</p>
                            <p>{item.name} &nbsp;&nbsp;&nbsp; {"****  " + item.number.substr(12)} </p>
                        </Card>
                        <div className={PaymentCss.buttonGroup}>
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
            <div className={PaymentCss.right}>
                <span className={PaymentCss.caption}>Operations</span>
                <br></br><br></br>
                <Button type="primary" className={PaymentCss.buttons} onClick={() => navigate("/detailPayment")}>Add a payment method</Button>
            </div>
        </div>
    </div>;
    
}


export default Payment;