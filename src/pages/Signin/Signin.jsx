import SigninCss from './Signin.module.css';
import { Button, Checkbox, Form, Input, Divider, Breadcrumb } from 'antd';
import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import {AppContext} from "../../App.js";

const Signin = (props) => {
  const { name, setName } = useContext(AppContext)
    const onFinish = (values) => {
        console.log('Success:', values);
        let user = JSON.parse(window.sessionStorage.getItem("preparedUser"));
        console.log("preparedUser", JSON.stringify(user));
        window.sessionStorage.setItem("currentUser", JSON.stringify(user));
        setName("Hello, " + user.firstName);
        goToHome();

      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    const navigate = useNavigate();
    function goToSignup() {
        navigate("/signup");
    };

    function goToHome() {
      navigate("/home");
    }
      return (
        <div>
        <Breadcrumb className={SigninCss.crumb}>
            <Breadcrumb.Item><a href="/signin">Signin</a></Breadcrumb.Item>
        </Breadcrumb>
        <div className={SigninCss.container}>
        <span className={SigninCss.caption}>Sign in</span>
        <br></br><br></br>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
    
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
    
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Sign in
            </Button>
            <Divider />
            <Button type="default" htmlType="button" className={SigninCss.signup} onClick={goToSignup}>
              Create your Allinone account
            </Button>
          </Form.Item>
        </Form>
        </div>
        </div>
      );
    
}
export default Signin;