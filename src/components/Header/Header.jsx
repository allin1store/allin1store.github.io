import React, {useContext} from 'react';
import { PageHeader, Button } from 'antd';
import { ShoppingCartOutlined,UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import {AppContext} from "../../App.js";


export default function Header(props) {
    const navigate = useNavigate();
    function goToCart() {
        navigate("/cart");
    };

    function goToAccount() {
        let user = JSON.parse(window.sessionStorage.getItem("currentUser"));
        if (user == null || user == undefined) {
            navigate("/signin");
        }
        else {
            navigate("/account");
        }
    };
    const { name } = useContext(AppContext)
    return <div style={{background: "#20232A"}}>
            <PageHeader className="site-page-header" 
                title=<span style={{color: '#61dafb', fontSize: '40px', textAlign: 'center'}}>ALLInOne</span> 
                subTitle=<span style={{color: '#61dafb', fontSize: '30px', textAlign: 'center'}}>Store</span>
                extra=<span>
                    <span style={{color: 'white'}}>{name}</span>
                    <Button type="primary" shape="circle" onClick={goToAccount} size="large" icon={<UserOutlined />}/>
                            &nbsp; &nbsp;
                            <Button shape="circle" key='cart' onClick={goToCart} size="large" icon={<ShoppingCartOutlined/>} />
                        </span>
                            >
            </PageHeader>
        </div>;
};