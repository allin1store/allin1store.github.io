import { Button, Breadcrumb, Popover } from "antd";
import { Link } from "react-router-dom";
import ProductCss from "./Product.module.css";
import { useNavigate } from 'react-router-dom';
import {AppContext} from "../../App.js";
import React, {useContext} from 'react';


export default function Product() {
    let chosenItem = JSON.parse(window.sessionStorage.getItem("choosenItem"));
    const navigate = useNavigate();
    const { number, setNumber } = useContext(AppContext);

    let content = 
    <table className={ProductCss.table}>
        <tr>
            <th>Website</th>
            <th className={ProductCss.content}>Amazon Canada</th>
            <th className={ProductCss.content}>Best Buy</th>
        </tr>
        <tr>
            <td>Name:</td>
            <td className={ProductCss.content}>{chosenItem.name}</td>
            <td className={ProductCss.content}>{chosenItem.name}</td>
        </tr>
        <tr>
            <td>Brand:</td>
            <td className={ProductCss.content}>{chosenItem.manufacturer}</td>
            <td className={ProductCss.content}>{chosenItem.manufacturer}</td>
        </tr>
        <tr>
            <td>Price:</td>
            <td className={ProductCss.content}>$ {chosenItem.salePrice + 25}</td>
            <td className={ProductCss.content}>$ {chosenItem.salePrice + 16}</td>
        </tr>
    </table>;

        function addToCart(item) {
            console.log("inaddCart", item);
            let user = JSON.parse(window.sessionStorage.getItem("currentUser"));
            if (user == null || user == undefined) {
                navigate("/signin");
            }
            else {
                user.cart.push(item);
                setNumber(user.cart.length);
                window.sessionStorage.setItem("currentUser", JSON.stringify(user));
            }
        }

    const productOverview=(
        <>
        <div className="upperDiv">
                <span>
                    <img alt={chosenItem.name} src={chosenItem.image}/>
                </span>
                
                <ul className="productOverview">
                    <li key="name_">Name:{" " + chosenItem.name}</li>
                    <li key="brand">Brand: {" "+chosenItem.manufacturer}</li>
                    <li key="price">Price:{" $"+chosenItem.salePrice}</li>
                    <li key="quantity">Quantity: {3+Math.floor(Math.random()*20)}</li>
                    <li key="buy">
                        <Button onClick={(e) => {addToCart(chosenItem)}}>Add to cart</Button>
                        <Button>Buy now</Button>
                        <Popover content={content}>
                            <Button type="primary">Price Comparison</Button>
                        </Popover>
                    </li>
                </ul>
            </div>
            
            <div className="lowerDiv">
                
                    {chosenItem.detail &&
                        <div className="description">
                        <h3>Description</h3>
                        <p>{chosenItem.detail}</p>
                        </div>
                    }
                
            </div>
        </>
    )

    return (
        <div>
            <Breadcrumb className={ProductCss.crumb}>
                <Breadcrumb.Item onClick={()=> navigate("/shopping")} style={{cursor: 'pointer'}}>Shopping</Breadcrumb.Item>
                <Breadcrumb.Item>Product</Breadcrumb.Item>
            </Breadcrumb>
            <div className="productPage">
            
            {chosenItem=== "" ? 
            <>
            <p>Sorry, product not found...</p>
            <Link to="/shopping">Shop now</Link> 
            </>
            
            : productOverview}
        </div>
        </div>
        
    );
}