import { useState, useEffect } from "react";
import Category from "./Category";
import Product from "./Product";
import { Link } from "react-router-dom";
import { Button, Breadcrumb } from "antd";
import ShoppingCss from "./Shopping.module.css"

export default function Shopping(props) {

    const [randomLatopList, setRandomLaptopList] = useState([]);
    const [randomDesktopList, setRandomDesktopList] = useState([]);
    const [randomTabletList, setRandomTabletList] = useState([]);

    useEffect(()=>{
        setRandomLaptopList(JSON.parse(window.sessionStorage.getItem("laptopList")));
        setRandomDesktopList(JSON.parse(window.sessionStorage.getItem("desktopList")));
        setRandomTabletList(JSON.parse(window.sessionStorage.getItem("tabletList")))
    },[]);
    

    // render 9 featured products randomly
    const randomLaptopProductList=(<div className="featureItems">
        <h2>Featured Laptop:</h2>
        <ul className="featureItems-list">
            {randomLatopList.map(item => (
                <li key={item.sku} onClick={()=>props.handleChosenItem(item)}> <Link to={"/product/"+item.sku}><span><img src={item.image} alt={item.name}/></span> <span>{item.name}</span></Link></li>
            ))}
        </ul>

    </div>);

    const randomDesktopProductList=(<div className="featureItems">
    <h2>Featured Desktop:</h2>
    <ul className="featureItems-list">
        {randomDesktopList.map(item => (
            <li key={item.sku} onClick={()=>props.handleChosenItem(item)}> <Link to={"/product/"+item.sku}><span><img src={item.image} alt={item.name}/></span> <span>{item.name}</span></Link></li>
        ))}
    </ul>

    </div>);

    const randomTabletProductList=(<div className="featureItems">
    <h2>Featured Tablet:</h2>
    <ul className="featureItems-list">
        {randomTabletList.map(item => (
            <li key={item.sku} onClick={()=>props.handleChosenItem(item)}> <Link to={"/product/"+item.sku}><span><img src={item.image} alt={item.name}/></span> <span>{item.name}</span></Link></li>
        ))}
    </ul>
    </div>);


    return (
        <div className="shoppingPage">
            <Breadcrumb className={ShoppingCss.crumb}>
                <Breadcrumb.Item><a href="/shopping">Shopping</a></Breadcrumb.Item>
            </Breadcrumb>
            <Category chosenItem={props.chosenItem} handleChosenItem={props.handleChosenItem} chosenCategory={props.chosenCategory} handleChosenCategory={props.handleChosenCategory}/>
            {props.chosenItem?
            <Product chosenItem={props.chosenItem} handleChosenItem={props.handleChosenItem}/>:  
            props.chosenCategory?<></>:
                <div className="randomLists">
                    {randomLatopList && randomLaptopProductList}
                    {randomDesktopList && randomDesktopProductList}
                    {randomTabletList && randomTabletProductList}
                    <Button onClick={()=>{window.scrollTo(0, 0)}}>Top</Button>
                </div>
            }

        </div>
    )
}
