import AccountCss from './Account.module.css';
import { Button, Form, Input, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import users from "./users.json";
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { useState, useEffect } from "react";
import { notification } from 'antd';

const User = ({chosenId, handleChosenId}) => {
    console.log("User received porps: ", chosenId);

    const navigate = useNavigate();
    const userInfo = chosenId != "" ? users.find(element => element.id == chosenId ) : "";
    const { Option } = Select;
    const [form] = Form.useForm();
    const key = 'updatable';

    useEffect( ()=> {
        if (chosenId == "")
            navigate("/home");
    })

    const logOut = () => {
        handleChosenId("");
        navigate("/home");
    }

    const onFinish = () => {
        let fieldValues = form.getFieldsValue();

        // Updates information if 
        //(No change in password / passes all tests for all other functions)
        //(Change in password / passes all tests for all other functions)
        if (fieldValues.password != undefined && fieldValues.password == fieldValues.confirmPassword && checkPassword(fieldValues)){
            // Update password in json file
            updateAlert();
        }
        else if (fieldValues.Password == undefined){
            // Update information in json file
            updateAlert();
        }
        
    };

    const updateAlert = () =>{
        notification.open({
            key,
            duration: 2,

            style: {backgroundColor: "#E6FFE3"},
            description:
              'Your information has been sucessfully updated',
        });
    }

    const checkName = ()=>({
        validator(_, value){
            if (value == undefined)
                return Promise.reject("Please enter name");

            return (value != null && !/[0-9]/.test(value) && !/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value)) 
                ? Promise.resolve() : Promise.reject("Name contains letters or symbols");
        }
    })

    // Function a little different from signUp
    const checkPassword = ({getFieldValue})=>({
        validator(_, value){;
            if (value == undefined)
                return Promise.resolve();
            
            let s = "";
            if (!/[0-9]/.test(value) || !/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value) || !/[A-Z]/.test(value))
                s += ("Requires 1 number, symbol, and uppercase letter");
            return s === "" ? Promise.resolve() : Promise.reject(s);
        }
    })

    // Function a little different from signUp
    const confirmPassword = ({getFieldValue})=>({
        validator(_, value){
            return (value != undefined || getFieldValue("password") === value ? Promise.resolve() : Promise.reject("Password do not match"));
        }
    })

    const checkPhoneNumber = ({getFieldValue})=>({
        validator(_, value){
                return (  (value != undefined && value.length == 10) ? Promise.resolve() : Promise.reject("Please enter valid phone number"));
        }
    })


    return <div className={AccountCss.container}>
        <div style={{display: "flex", flexDirection: "row"}}>

            <div className={AccountCss.leftDetails}>
                Welcome Mr. {userInfo.lastname}
                <br></br>
                <Avatar size={128} icon={<UserOutlined />} />
                <br></br>
                {userInfo.firstname}
                <br></br>
                <Button onClick={logOut}> Log Out</Button>
            </div>
            
            <div style={{width:"100%"}}>
                <h1> Personal Information </h1>

                <Form form={form} name="form" onFinish={onFinish} style={{display: "inline-block"}}>

                    <div style={{display: "flex", flexDirection: "row"}}>
                        <Form.Item label="Type" name="type" 
                            labelCol={{span: 24}} style={{marginRight: "25px", width: "45%"}}
                                initialValue={userInfo.type}>

                            <Select disabled> </Select> 
                        </Form.Item>
                        
                        <Form.Item label="Email" name="email" 
                                labelCol={{span: 24}} style={{width: "45%"}}
                                    initialValue={userInfo.email}>

                            <Input disabled/>
                        </Form.Item>    
                    </div>  
                    
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <Form.Item label="New Password" name="password" 
                            labelCol={{span: 24}} style={{marginRight: "25px", width: "45%"}}
                              rules = {[ checkPassword ]} hasFeedback>
                            
                            <Input.Password />
                        </Form.Item>

                        <Form.Item label="Confirm Password" name="confirmpassword" 
                            labelCol={{span: 24}} style={{width: "45%"}}
                                rules = {[ confirmPassword ]} hasFeedback>
                            
                            <Input.Password />
                        </Form.Item>
                    </div> 

                    <div style={{display: "flex", flexDirection: "row"}}>
                        <Form.Item label="FirstName" name="firstname" 
                            labelCol={{span: 24}} style={{marginRight: "25px", width: "45%"}} 
                                initialValue={userInfo.firstname} rules={[ checkName ]} hasFeedback>
                            
                            <Input />
                        </Form.Item>

                        <Form.Item label="LastName" name="lastname" 
                            labelCol={{span: 24}} style={{width: "45%"}}
                                initialValue={userInfo.lastname} rules = {[ checkName ]} hasFeedback>
                            
                            <Input/>
                        </Form.Item>
                    </div> 

                    <div style={{display: "flex", flexDirection: "row"}}>
                        <Form.Item label="Phone Number" name="phonenumber" 
                            labelCol={{span: 24}} style={{marginRight: "25px",width: "45%"}} 
                                initialValue={userInfo.phonenumber}rules = {[ {type: "string", whitespace: "false"}, checkPhoneNumber ]} hasFeedback>
                                
                                <Input />
                        </Form.Item>

                        <Form.Item label="Address" name="address" 
                            labelCol={{span: 24}} style={{width: "45%"}}
                                initialValue={userInfo.address}>
                                <Input/>
                        </Form.Item>
                    </div> 

                    <Form.Item>
                        <Button type="primary" htmlType="submit"> Modify Information </Button>
                    </Form.Item>
                </Form>
            </div>

            

        </div>
    </div>;
    
}


export default User;