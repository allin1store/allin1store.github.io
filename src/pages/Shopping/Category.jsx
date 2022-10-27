import { Button } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Category(props){

    const [ catlist, setCatList ] = useState([]);

    const getChosenCatData = (cat) =>{

        let catProductList = [];
        fetch(`/bestbuyAPI/${cat}/page1.json`,
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
            
            catProductList = res.products;
            setCatList(catProductList)
        })
        
    }

    const display= () =>{
        return(
            
            <div className="cat-list">
                <ul>
                {catlist.map(item=>(
                    <li key={item.sku} onClick={()=>props.handleChosenItem(item)}> <Link to={"/product/"+item.sku}><span><img src={item.image} alt={item.name}/></span> <span>{item.name}</span></Link></li>
                ))}
                
                </ul>

                
                <Button onClick={()=>{window.scrollTo(0, 0)}}>Top</Button>
            </div>
        )
    }

    return(
        <div className="category">
            <ul className="categoryLabels">
                <li key="cat_desktop" value="desktop" onClick={()=>{props.handleChosenCategory("desktop");props.handleChosenItem()}}>Desktop</li>
                <li key="cat_tablets" value="tablets" onClick={()=>{props.handleChosenCategory("tablet");props.handleChosenItem()}}>Tablets</li>
                <li key="cat_laptops" value="laptops" onClick={()=>{props.handleChosenCategory("laptop");props.handleChosenItem()}}>Laptops</li>
            </ul>
            {props.chosenCategory ? getChosenCatData(props.chosenCategory):<></>}
            {catlist !="" && !props.chosenItem && display()}
            
        </div>)
}