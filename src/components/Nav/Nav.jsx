import { HomeOutlined, ShoppingOutlined, ProfileOutlined, AccountBookOutlined, ContactsOutlined  } from '@ant-design/icons';
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
    props.handleChosenItem();
    props.handleChosenCategory();
    // console.log(target);
    navigate(target.key);
  }
  
  const items = [
    getItem('Home', 'home', <HomeOutlined />),
    getItem('Shopping', 'shopping', <ShoppingOutlined />),
    getItem('Order', 'order', <ProfileOutlined />),
    getItem('Account', 'account', <AccountBookOutlined />),
    getItem('About us', 'about', <ContactsOutlined />),
  ];
  
    const navigate = useNavigate();
    return <Menu
    style={{
      width: '15%',
      minHeight: '600px'
    }}
    defaultSelectedKeys="home"
    mode="vertical"
    items={items}
    onClick={goTo}
    />
};

