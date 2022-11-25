import PaymentDetailCss from "./PaymentDetail.module.css"
import { Breadcrumb, Button, Form, Input, Select, } from "antd";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

const PaymentDetail = (props) => {
    const navigate = useNavigate();
    let user = JSON.parse(window.sessionStorage.getItem("currentUser"));
    const [payment, setPayment] = useState([]);
    const [form] = Form.useForm();
    const { Option } = Select;

    useEffect(()=>{
        setPayment(user.payment);
    },[]);
   
    function onFinish() {

    }

    return <div className={PaymentDetailCss.container}>
        <Breadcrumb className={PaymentDetailCss.crumb}>
            <Breadcrumb.Item onClick={()=> navigate("/account")} style={{cursor: 'pointer'}}>Account</Breadcrumb.Item>
            <Breadcrumb.Item onClick={()=> navigate("/account/payment")} style={{cursor: 'pointer'}}>Payments</Breadcrumb.Item>
            <Breadcrumb.Item onClick={()=> navigate("/detailPayment")} style={{cursor: 'pointer'}}>New payment method</Breadcrumb.Item>
        </Breadcrumb>
        <div className={PaymentDetailCss.main}>
            <div className={PaymentDetailCss.left}>
            <Form form={form} name="form" onFinish={onFinish} className={PaymentDetailCss.form} layout="vertical">

                <Form.Item label="Card Type" name="type"  hasFeedback className={PaymentDetailCss.formItem}>
                    <Select style={{width: "100%" }} >
                        <Option value="Customer">Credit Card</Option>
                        <Option value="Supplier">Debit Card</Option>
                    </Select> 
                </Form.Item>
                <br></br>
                <Form.Item label="Bank" name="bank"  hasFeedback className={PaymentDetailCss.formItem}>
                    <Input />
                </Form.Item>    
                <br></br>
                <Form.Item label="Card Number" name="number" hasFeedback className={PaymentDetailCss.formItem}>
                    <Input />
                </Form.Item>
                <br></br>
                <Form.Item label="Validity date" name="valid" hasFeedback className={PaymentDetailCss.formItem}>
                    <Input />
                </Form.Item>
                <br></br>
                <Form.Item label="CVV" name="cvv" hasFeedback className={PaymentDetailCss.formItem}>
                    <Input />
                </Form.Item>
                <br></br>
                <Form.Item label="Holder"hasFeedback className={PaymentDetailCss.formItem}>
                    <Input />
                </Form.Item>
            </Form>
            
            </div>
            <div className={PaymentDetailCss.right}>
                <span className={PaymentDetailCss.caption}>Operations</span>
                <br></br><br></br>
                <Button type="primary" className={PaymentDetailCss.buttons} htmlType="submit">Confirm</Button>
            </div>
        </div>
    </div>;
    
}


export default PaymentDetail;