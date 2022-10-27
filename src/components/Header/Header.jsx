import React from 'react';
import { PageHeader, Button } from 'antd';
import { ShoppingCartOutlined,UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';


export default function Header(props) {
    const navigate = useNavigate();
    function goToCart() {
        navigate("/cart");
    };

    function goToAccount() {
        navigate("/account");
    };

    return <div style={{background: "#20232A"}}>
            <PageHeader className="site-page-header" 
                title=<span style={{color: '#61dafb', fontSize: '40px', textAlign: 'center'}}>ALLInOne</span> 
                subTitle=<span style={{color: '#61dafb', fontSize: '30px', textAlign: 'center'}}>Store</span>
                extra=<span><Button shape="circle" key='cart' onClick={goToCart} size="large" icon={<ShoppingCartOutlined/>} />
                            &nbsp; &nbsp;
                            <Button type="primary" shape="circle" onClick={goToAccount} size="large" icon={<UserOutlined />}/>
                        </span>
                            >
            </PageHeader>
        </div>;
};