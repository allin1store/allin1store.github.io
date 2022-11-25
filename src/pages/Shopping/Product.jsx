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

        function goCheckout(item) {
            let user = JSON.parse(window.sessionStorage.getItem("currentUser"));
            if (user == null || user == undefined) {
                navigate("/signin");
            }
            else {
                user.cart.push(item);
                setNumber(user.cart.length);
                window.sessionStorage.setItem("currentUser", JSON.stringify(user));
            }
            navigate("/checkout");
        }

    const productOverview=(
        <>
        <h2>{chosenItem.name}</h2>
        <div className="upperDiv">
            <span>
                <img className={ProductCss.prodImg} alt={chosenItem.name} src={chosenItem.image}/>
            </span>
            
            <ul className="productOverview">
                <table>
                    <tr>
                        <td><h3>Brand</h3></td>
                        <td>{chosenItem.manufacturer}</td>
                    </tr>
                    <tr>
                        <td><h3>Price</h3></td>
                        <td>{" $"+chosenItem.salePrice}</td>
                    </tr>
                    <tr>
                        <td><h3>Quantity</h3></td>
                        <td>{3+Math.floor(Math.random()*20)}</td>
                    </tr>
                    <tr>
                        <td className={ProductCss.detail} colspan="2"><h3>{chosenItem.detail ? "Description" : "" }</h3></td>
                    </tr>
                    <tr>
                        <td className={ProductCss.detail} colspan="2">{chosenItem.detail}</td>
                    </tr>
                </table>
            </ul>
        </div>
        <div className="lowerDiv">
            <Button onClick={()=> navigate(-1)}>Back</Button>
            <Button className={ProductCss.btnAddToCart} onClick={(e) => {addToCart(chosenItem)}}>Add to cart</Button>
            <Button className={ProductCss.buyNow} onClick={() => {goCheckout(chosenItem)}}>Buy now</Button>
            <Popover content={content}>
                <Button type="primary">Price Comparison</Button>
            </Popover>
        </div>
        </>
    )

    return (
        <div>
            <Breadcrumb className={ProductCss.crumb}>
                <Breadcrumb.Item onClick={()=> navigate("/shopping")} style={{cursor: 'pointer'}}>Shopping</Breadcrumb.Item>
                <Breadcrumb.Item>Product</Breadcrumb.Item>
            </Breadcrumb>
            <div className={ProductCss.container}>
                <div className="productPage">
            
                    {chosenItem=== "" ? 
                    <>
                    <p>Sorry, product not found...</p>
                    <Button onClick={() => navigate("/shopping")}>Shop now</Button> 
                    </>
            
                    : productOverview}
                    
                </div>
            </div>
        </div>
        
    );
}