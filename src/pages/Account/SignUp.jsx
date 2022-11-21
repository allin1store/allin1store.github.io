import AccountCss from './Account.module.css';
import {Form, Input, Button, Select} from 'antd';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import users from "./users.json";

const SignUp = (props) => {
    console.log("SignUp received porps: ", props);

    const [form] = Form.useForm();
    const { Option } = Select;
    const navigate = useNavigate();

    const formLayout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    }

    const onFinish = () => {
        let count = 0;
        let fieldValues = form.getFieldsValue();

        for (let key in fieldValues)
            if (fieldValues[key] === undefined)
               count++;

        if (count == 0 && !form.getFieldsError().some((item) => item.errors.length > 0)){
            // Updates json file
            navigate("O/confirmemail");
        }
            
        
    };

    const checkTypeUser = () =>({
        validator(_, value){
            return value === undefined ? Promise.reject("Select type") : Promise.resolve();
        }
    })

    const checkEmail = ()=>({
        validator(_, value){
            if (value == undefined || value.length == 0)
                return Promise.reject("Please enter email");
            
            for (let x = 0; x < users.length; x++)
                if (users[x].email.toLowerCase() === value.toLowerCase())
                    return Promise.reject("Invalid email");
            return Promise.resolve();
        }
    })

    const checkName = ()=>({
        validator(_, value){
            if (value == undefined)
                return Promise.reject("Please enter name");

            return (value != null && !/[0-9]/.test(value) && !/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value)) 
                ? Promise.resolve() : Promise.reject("Name contains letters or symbols");
        }
    })

    const checkPassword = ({getFieldValue})=>({
        validator(_, value){
            if (value == undefined)
                return Promise.reject("Please enter password");
            
            let s = "";
            if (!/[0-9]/.test(value) || !/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value) || !/[A-Z]/.test(value))
                s += ("Requires 1 number, symbol, and uppercase letter");
            return s === "" ? Promise.resolve() : Promise.reject(s);
        }
    })

    const confirmPassword = ({getFieldValue})=>({
        validator(_, value){
            return (value != undefined && getFieldValue("password") === value ? Promise.resolve() : Promise.reject("Password do not match"));
        }
    })

    const checkPhoneNumber = ({getFieldValue})=>({
        validator(_, value){
                return (  (value != undefined && value.length == 10) ? Promise.resolve() : Promise.reject("Please enter valid phone number"));
        }
    })

    return <div className={AccountCss.signUpContainer}>
        <div className={AccountCss.form}>

            <Form form={form} name="form" onFinish={onFinish}>

                <Form.Item label="Type" name="type" rules={[ checkTypeUser]} hasFeedback>
                    <Select style={{width: "100%" }} >
                        <Option value="Customer">Customer</Option>
                        <Option value="Supplier">Supplier</Option>
                    </Select> 
                </Form.Item>

                <Form.Item label="Email" name="email" rules = {[ { type: "email"}, checkEmail ]}  hasFeedback>
                    <Input />
                </Form.Item>    

                <br/>

                <Form.Item label="Password" name="password"  rules = {[ checkPassword ]} hasFeedback>
                        <Input.Password />
                    </Form.Item>

                    <Form.Item label="Confirm Password" name="confirmpassword" rules = {[ confirmPassword ]} hasFeedback>
                        <Input.Password  />
                    </Form.Item>

                <br/>

                <Form.Item label="FirstName" name="firstname" rules={[ checkName ]} hasFeedback>
                    <Input />
                </Form.Item>
                
                <Form.Item label="LastName" name="lastname"  rules = {[ checkName ]} hasFeedback>
                    <Input />
                </Form.Item>

                <br/>
    
                <Form.Item label="Phone Number" name="phonenumber"  rules = {[ {type: "string", whitespace: "false"}, checkPhoneNumber ]} hasFeedback>
                        <Input/>
                </Form.Item>
                <Form.Item label="Address" name="address">
                        <Input />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit"> Create Account </Button>
                </Form.Item>
               
            </Form>
        </div>
    </div>;
}

export default SignUp;