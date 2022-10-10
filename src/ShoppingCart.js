import React from 'react';

//to do:
// 1. if it is empty
//      a. display a message
//      b. render a button "Shop Now" -> Home.js
// 2. display selected items, price, quantity
//      a. product name -> Product.js
// 3. add or remove items
// 4. "continue to checkout" button -> Payment.js

const ShoppingCart = props => {
    
    return (
        <div className="wrapper">
            <main>
            <section id="shoppingCart">
                <div className="text">
                    <h2>Shopping Cart</h2>
                    {/* to do*/}
                    <ul>
                        <li id="productName" onClick={()=>props.handleChosenPage('productPage')}>Name</li>
                        <li id="productPrice">Price</li>
                        <li id="productQuantity">Quantity</li>
                        <li id="subtotal">Subtotal</li>
                    </ul>

                    <button onClick={()=>props.handleChosenPage('paymentPage')}>Buy Now</button>

                </div>
            </section>
        </main>
        <footer>&nbsp;</footer>
        </div>
        )
};

export default ShoppingCart;