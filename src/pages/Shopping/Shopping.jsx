import { useState, useEffect } from "react";
import Category from "./Category";
import Product from "./Product";
import { Link } from "react-router-dom";
import { Button } from "antd";


export default function Shopping(props) {

    const [randomLatopList, setRandomLaptopList] = useState([]);
    const [randomDesktopList, setRandomDesktopList] = useState([]);
    const [randomTabletList, setRandomTabletList] = useState([]);

    const getLaptopData = () =>{

        let aRandomProductList = [];

        fetch('/bestbuyAPI/laptop/page1.json',
        {
            headers:{
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
            }
        })
        .then(res=>{
            return res.json();
        })
        .then(res=>{
            let hundardProducts = res.products;
            let ranIndex = Math.floor(Math.random() * 40);

            for(let i = 0; i < 3; i++){

                aRandomProductList[i] = {
                    name: hundardProducts[ranIndex].name,
                    sku: hundardProducts[ranIndex].sku,
                    image: hundardProducts[ranIndex].image,
                    manufacturer: hundardProducts[ranIndex].manufacturer,
                    detail: hundardProducts[ranIndex].longDescription,
                    regularPrice: hundardProducts[ranIndex].regularPrice,
                    salePrice: hundardProducts[ranIndex].salePrice
                }
                ranIndex += 2;
            }
            setRandomLaptopList(aRandomProductList);
        })
    }
    const getDesktopData = () =>{

        let aRandomProductList = [];

        fetch('/bestbuyAPI/desktop/page1.json',
        {
            headers:{
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
            }
        })
        .then(res=>{
            return res.json();
        })
        .then(res=>{
            let hundardProducts = res.products;
            let ranIndex = Math.floor(Math.random() * 40);

            for(let i = 0; i < 3; i++){

                aRandomProductList[i] = {
                    name: hundardProducts[ranIndex].name,
                    sku: hundardProducts[ranIndex].sku,
                    image: hundardProducts[ranIndex].image,
                    manufacturer: hundardProducts[ranIndex].manufacturer,
                    detail: hundardProducts[ranIndex].longDescription,
                    regularPrice: hundardProducts[ranIndex].regularPrice,
                    salePrice: hundardProducts[ranIndex].salePrice
                }
                ranIndex += 2;
            }
            setRandomDesktopList(aRandomProductList);
        })
    }
    const getTabletData = () =>{

        let aRandomProductList = [];

        fetch('/bestbuyAPI/tablet/page1.json',
        {
            headers:{
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
            }
        })
        .then(res=>{
            return res.json();
        })
        .then(res=>{
            let hundardProducts = res.products;
            let ranIndex = Math.floor(Math.random() * 40);

            for(let i = 0; i < 3; i++){

                aRandomProductList[i] = {
                    name: hundardProducts[ranIndex].name,
                    sku: hundardProducts[ranIndex].sku,
                    image: hundardProducts[ranIndex].image,
                    manufacturer: hundardProducts[ranIndex].manufacturer,
                    detail: hundardProducts[ranIndex].longDescription,
                    regularPrice: hundardProducts[ranIndex].regularPrice,
                    salePrice: hundardProducts[ranIndex].salePrice
                }
                ranIndex += 20;
            }
            setRandomTabletList(aRandomProductList);
        })
    }

    useEffect(()=>{
        getLaptopData();
        getDesktopData();
        getTabletData()
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




let div1 = document.getElementById("div1");
div1.style.visibility = "hidden";
div1.style.visibility = "visible";

let class1 = document.getElementsByClassName("class1");
class1.style.color = "blue";
class1.style.color = "red";

let text1 = document.getElementById("text1");
text1.innerHTML="new content!";


let input1 = document.getElementById("input1");
input1.innerHTML="name";
let input2 = document.getElementById("input2");
input2.innerHTML="password";
let input3 = document.getElementById("input3");
input3.innerHTML="email";
let input4 = document.getElementById("input4");
input4.innerHTML="phone";
let input5 = document.getElementById("input5");
input5.innerHTML="address";
