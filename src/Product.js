import React from 'react';
// to do:
// 1. show product name (provide a link to Product.js), price, picture, description 
// 2. "add to cart" button -> pop up a message after added to cart
// 3. "buy now" button -> Payment.js (optional?)
// 4. price comparsion table
//      a. product name, price, store name (provide a link?)

const Product = props => {
    
    return (
        <div className="wrapper">
            <main>
            <section id="productPage">
                <div className="text">
                    <h2>Product</h2>
                    {/* to do*/}
                    <ul>
                        <li id="productName">Product Name</li>
                        <li id="productPrice">Price</li>
                        <li id="productPhoto">Product Photo</li>
                        <li id="productPhoto">Product Description</li>
                        <li id="btn">Add to cart button</li>
                        <li id="priceCompare">Price Comparison Table</li>
                    </ul>
                </div>
            </section>
        </main>
        <footer>&nbsp;</footer>
        </div>
        )
};

export default Product;