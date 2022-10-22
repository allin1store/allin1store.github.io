
export default function Product(props) {

    return (
        <div className="productPage">
            <div className="upperDiv">
                <img alt="product-photo"/>
                <ul className="productOverview">
                    <li key="name_">Name:</li>
                    <li key="brand">Brand:</li>
                    <li key="price">Price:</li>
                    <li key="quantity">Quantity: </li>
                </ul>
            </div>
            <div className="midDiv">
                <button>Add to cart</button>
                <button>Buy now</button>
            </div>
            <div className="lowerDiv">
                <div className="description">
                    <h3>Description</h3>
                    <p>details of the product...</p>
                </div>
                <div className="priceComparison">
                    <h3>Price Comparison Table</h3>
                    <table className="priceTable">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Website1</th>
                                <th>Website2</th>
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
                                <td>aa</td>
                                <td>aa</td>
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
        </div>
    );
}