import { HomeOutlined, ShoppingOutlined, ProfileOutlined, AccountBookOutlined, ContactsOutlined, DollarOutlined  } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import {useNavigate} from 'react-router-dom'


export default function Nav(props) {
  console.log("Nav props", props);
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  function goTo(target) {
    // console.log(target);
    navigate(target.key);
  }
  
  const navigate = useNavigate();
  const items = [
    getItem('Home', 'home', <HomeOutlined />),
    getItem('Shopping', 'shopping', <ShoppingOutlined />),
    getItem('Account', 'account', <AccountBookOutlined />, [
      getItem('Account Detail', 'account', <AccountBookOutlined />),
      getItem('Order History', 'order', <ProfileOutlined />),
      getItem('Your Payments', 'account/payment', <DollarOutlined />)
    ]),
    getItem('About us', 'about', <ContactsOutlined />),
  ];
  
    return <Menu style={{
      width: '15%',
      minHeight: '600px'
    }}
    defaultSelectedKeys="home"
    defaultOpenKeys={['account']}
    mode="inline"
    items={items}
    onClick={goTo}
   
    />;
};

