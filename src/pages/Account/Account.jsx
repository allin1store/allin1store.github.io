import {Button, Breadcrumb, Divider} from 'antd';
import { useNavigate } from 'react-router-dom';
import React, {useContext} from "react";
import AccountCss from "./Account.module.css"
import {AppContext} from "../../App.js";


const Account = (props) => {
    const { name, setName } = useContext(AppContext)
    const navigate = useNavigate();

    function logout() {
        window.sessionStorage.removeItem("currentUser");
        setName("");
        navigate("/home");
    };
    let currentUser = JSON.parse(window.sessionStorage.getItem("currentUser"));
    if (currentUser == null || currentUser == undefined) {
        return <div className={AccountCss.container1}>
            You are not logged in.
            <Button type="default" htmlType="submit" onClick={() => navigate("/signin")}>
              Sign in
            </Button>
        </div>
    }
    return <div className={AccountCss.container}>
        <Breadcrumb className={AccountCss.crumb}>
            <Breadcrumb.Item><a href="/account">Account</a></Breadcrumb.Item>
        </Breadcrumb>
        <div className={AccountCss.main}>
        <div className={AccountCss.content}>
            <span className={AccountCss.caption}>Account details</span>
            <br></br><br></br>
            <span className={AccountCss.item}>
                <span>
                    <label>First Name</label><br></br>
                    <span>{currentUser.firstName}</span>
                </span>
                <Button>Edit</Button>
            </span>
            <Divider></Divider>
            <span className={AccountCss.item}>
                <span>
                    <label>Last Name</label><br></br>
                    <span>{currentUser.lastName}</span>
                </span>
                <Button>Edit</Button>
            </span>
            <Divider></Divider>
            <span className={AccountCss.item}>
                <span>
                    <label>Email</label><br></br>
                    <span>{currentUser.email}</span>
                </span>
                <Button>Edit</Button>
            </span>
            <Divider></Divider>
            <span className={AccountCss.item}>
                <span>
                    <label>Password</label><br></br>
                    <span>*************</span>
                </span>
                <Button>Edit</Button>
            </span>
            <Divider></Divider>
            <span className={AccountCss.item}>
                <span>
                    <label>Phone</label><br></br>
                    <span>{currentUser.phoneNumber}</span>
                </span>
                <Button>Edit</Button>
            </span>
            <Divider></Divider>
            <span className={AccountCss.item}>
                <span>
                    <label>Address</label><br></br>
                    <span>{currentUser.address}</span>
                </span>
                <Button>Edit</Button>
            </span>
        </div>
        <div className={AccountCss.content}>
            <span className={AccountCss.caption}>Operations</span>
            <br></br><br></br>
            <Button onClick={() => navigate("/account/payment")} type="default" className={AccountCss.logout}>Your Payments</Button>
            <br></br>
            <Button onClick={() => navigate("/order")} type="default" className={AccountCss.logout}>Order history</Button>
            <br></br>
            <Button onClick={() => logout()} danger type="primary" className={AccountCss.logout}>Log out</Button>
        </div>

        </div>
        
        
        
    </div>;
}

export default Account;