import AccountCss from './Account.module.css';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import users from "./users.json";
import { useState, useEffect } from "react";

const Account = (props) => {
    console.log("Account received porps: ", props);

    const [form] = Form.useForm();
    const navigate = useNavigate();

    useEffect( ()=> {
        if (props.chosenId != "")
            navigate("O/user");
    })

    function goTo(){
        navigate("O/signUp");
    }
    
    const onReset = () => {
        form.resetFields();
    };

    const layout = {
        wrapperCol: {
          offset: 8,
          span: 16,
        },
    };

    const formLayout = {
        labelCol: { span: 8 },
        wrapperCol: { span:16 }
    }

    const checkAccount = () => {
        if (form.getFieldValue("email") == undefined || form.getFieldValue("password") == undefined)
            return;
        else{
            for (let x = 0; x < users.length; x++){
                if (users[x].email.toLowerCase() === form.getFieldValue("email").toLowerCase() && 
                        users[x].password === form.getFieldValue("password")){
                        
                        props.handleChosenId(users[x].id);
                        navigate("/home");
                }
            }
        }
    };

        return <div className={AccountCss.container} style={{display: props.chosenId != "" ? "none" : "block"}}>
            <div className={AccountCss.form}>
                <Form {...formLayout} form = {form}>
                    <Form.Item
                        label="Email" name="email" rules = {[ { required: true, message: "Invalid email or password" , type: "email" }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password" name="password">
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...layout}>
                        <Button type="primary" htmlType="submit" name="submit" onClick={checkAccount}> Sign In </Button>
                        
                        
                    </Form.Item>

                </Form>
            </div>

            <br/>

            <Button type="link" htmlType="button" style={{fontSize: 12}} onClick={goTo}>
                    Create Account
            </Button>
        </div>;
    
}

//<Button htmlType="button" onClick={onReset}> Reset </Button>
export default Account;