import { useState } from "react";

export default function Category(props){

    const [chosenCategory, setChosenCategory] = useState("");

    return(
        <div className="category">
            <ul>
                <li key="cat_desktop" value={chosenCategory} onClick={(e)=>setChosenCategory("cat_desktop")}>Desktop</li>
                <li key="cat_tablets" value={chosenCategory} onClick={(e)=>setChosenCategory("cat_tablets")}>Tablets</li>
                <li key="cat_laptops" value={chosenCategory} onClick={(e)=>setChosenCategory("cat_laptops")}>Laptops</li>
            </ul>
            {console.log(chosenCategory)}
        </div>)
}