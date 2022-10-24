import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";

export default function Product({chosenItem, handleChosenItem}) {

    const navigate = useNavigate();

    const handleBack = () =>{
        
        handleChosenItem("");
        navigate(-1);
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
                        <Button>Add to cart</Button>
                        <Button>Buy now</Button>
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
                
                <div className="priceComparison">
                    <h3>Price Comparison Table</h3>
                    <table className="priceTable">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Website1</th>
                                <th>Best Buy</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Name:</td>
                                <td>product name</td>
                                <td>product name</td>
                            </tr>
                            <tr>
                                <td>Brand:</td>
                                <td>brand name</td>
                                <td>brand name</td>
                            </tr>
                            <tr>
                                <td>Price:</td>
                                <td>$</td>
                                <td>$</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </div>
            <Button className="backButton" onClick={()=> handleBack()}>Back</Button>
        </>
    )

    return (
        <div className="productPage">
            {chosenItem=== "" ? 
            <>
            <p>Sorry, product not found...</p>
            <Link to="/shopping">Shop now</Link> 
            </>
            
            : productOverview}
        </div>
    );
}