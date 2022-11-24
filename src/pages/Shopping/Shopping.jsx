import { useState, useEffect } from "react";
import { Button, Breadcrumb } from "antd";
import ShoppingCss from "./Shopping.module.css"
import { useNavigate } from 'react-router-dom';

export default function Shopping(props) {
    const navigate = useNavigate();
    
    const [randomLatopList, setRandomLaptopList] = useState([]);
    const [randomDesktopList, setRandomDesktopList] = useState([]);
    const [randomTabletList, setRandomTabletList] = useState([]);
    const [ listType, setListType ] = useState([]);
    const [catList, setCatList] = useState([]);


    useEffect(()=>{
        setRandomLaptopList(JSON.parse(window.sessionStorage.getItem("laptopList")));
        setRandomDesktopList(JSON.parse(window.sessionStorage.getItem("desktopList")));
        setRandomTabletList(JSON.parse(window.sessionStorage.getItem("tabletList")))
        setListType(0);
    },[]);

    function goToProduct(item) {
        window.sessionStorage.setItem("choosenItem", JSON.stringify(item));
        navigate("/product/" + item.sku);
    }
    const type0Page=(<div>
        <div className="featureItems">
            <h2>Featured Laptop:</h2>
            <ul className={ShoppingCss.randomItem}>
            {randomLatopList.map(item => (
                <li key={item.sku} onClick={()=> goToProduct(item)}><span><img src={item.image} alt={item.name}/></span> <span>{item.name}</span></li>
            ))}
            </ul>
        </div>
        <div className="featureItems">
    <h2>Featured Desktop:</h2>
    <ul className={ShoppingCss.randomItem}>
        {randomDesktopList.map(item => (
            <li key={item.sku} onClick={()=> goToProduct(item)}><span><img src={item.image} alt={item.name}/></span> <span>{item.name}</span></li>
        ))}
    </ul>
    </div>
    <div className="featureItems">
    <h2>Featured Tablet:</h2>
    <ul className={ShoppingCss.randomItem}>
        {randomTabletList.map(item => (
            <li key={item.sku} onClick={()=> goToProduct(item)}><span><img src={item.image} alt={item.name}/></span> <span>{item.name}</span></li>
        ))}
    </ul>
    </div>
    </div>);

    const categoryPage=(
        <div className={ShoppingCss.catList}>
            <ul className={ShoppingCss.randomItem}>
            {catList.map(item=>(
                    <li className={ShoppingCss.catItem} key={item.sku} onClick={()=> goToProduct(item)}><span><img src={item.image} alt={item.name}/></span> <span>{item.name}</span></li>
            ))}
                
        </ul>
        </div>
    );
    return (       
        <div>
            <Breadcrumb className={ShoppingCss.crumb}>
                <Breadcrumb.Item onClick={()=> navigate("/shopping")} style={{cursor: 'pointer'}}>Shopping</Breadcrumb.Item>
            </Breadcrumb>
            <div className={ShoppingCss.listPage}>
            <div className={ShoppingCss.category}>
                <span onClick={() => {setCatList(JSON.parse(window.sessionStorage.getItem("categoryDesktop"))); setListType(1)}}>Desktop</span>
                <span onClick={() => {setCatList(JSON.parse(window.sessionStorage.getItem("categoryTablet"))); setListType(2)}}>Tablets</span>
                <span onClick={() => {setCatList(JSON.parse(window.sessionStorage.getItem("categoryLaptop"))); setListType(3)}}>Laptops</span>
            </div>
            <div className="randomLists">
                {listType == 0?type0Page:categoryPage}
                <Button onClick={()=>{window.scrollTo(0, 0)}}>Top</Button>
            </div>
            </div>
            
        </div>
    )
}
