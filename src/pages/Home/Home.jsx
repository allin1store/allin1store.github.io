import { useState,useEffect } from "react";
const Home = (props) => {

    const [randomList, setRandomList] = useState([]);

    useEffect(()=>{
        //get random list
        setRandomList(['1','2'])
    },[]);
    
    // render 9 feature items randomly
    const randomProductList=(<div className="featureItems">
        <h2>Feature Items:</h2>
        <ul className="featureItems-list">
            {randomList.map((item)=>{
                {console.log(item)}
                <li key={item}><img src = "" alt=""/>{item}</li>
            })}
        </ul>

    </div>);

return (
        <div className="homePage">
            {props.Category}
            {randomList && randomProductList}
        </div>
    )
}


export default Home;