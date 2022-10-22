import AccountCss from './Account.module.css';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import users from "./users.json";

const Account = (props) => {
    console.log("Account received porps: ", props);

    const [form] = Form.useForm();
    const navigate = useNavigate();

    function goTo(){
        navigate("O/SignUp");
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

    const checkAccount = (getFieldsValue) => {
        // console.log(form.setFieldValue("email", "name"));
        // let check = false, check2 = false;
        // users.forEach(acc => {
        //     for (let key in acc){
        //             if (key === "email" && acc[key].toLowerCase() === form.getFieldValue("email").toLowerCase())
        //                 check = true;
        //             else if (check && key === "password" && acc[key] === form.getFieldValue("password"))
        //                 check2 = true;
        //             else if (check)
        //                 break;
        //     }
        // })
        // if (!check2)
        //     clear();
        // else
        //     navigate("/home");
        if (form.getFieldValue("email") == undefined || form.getFieldValue("password") == undefined)
            return;
        else{
            for (let x = 0; x < users.length; x++){
                if (users[x].email.toLowerCase() === form.getFieldValue("email").toLowerCase() && 
                        users[x].password === form.getFieldValue("password")){
                            navigate("/account");
                }
            }
        }
    };

    function clear(){
        form.setFieldValue("email", "");
        form.setFieldValue("password", "")
        return false;
    }
    

        return <div className={AccountCss.container}>
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
                        <> &nbsp; </>
                        <Button htmlType="button" onClick={onReset}> Reset </Button>
                    </Form.Item>

                </Form>
            </div>

            <br/>

            <Button type="link" htmlType="button" style={{fontSize: 12}} onClick={goTo}>
                    Create Account
            </Button>
        </div>;
    
}


export default Account;