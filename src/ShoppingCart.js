import React from 'react';

//to do:
// 1. if it is empty
//      a. display a message
//      b. render a button "Shop Now" -> Home.js
// 2. display selected items, price, quantity
//      a. click on product name -> Product.js
// 3. add or remove items using a drop-down number menu (1-99)
// 4. a "delete" button next to the item -> confirm before deletion
// 5. caculate the subtotal
// 6. "continue to checkout" button -> Payment.js
// 7. "clear" button to empty the cart

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
                        <li id="productQuantity">Quantity (a drop-down menu)</li>
                        <li id="changeQuantity">a drop-down menu from 1-99</li>
                        <li id="deleteItem">Delete button</li>
                        <li id="subtotal">Subtotal</li>
                    </ul>

                    <button className="btn" onClick={()=>props.handleChosenPage('paymentPage')}>Checkout</button>
                    <button className="btn" onClick={()=>handleClearCart()}>Empty Cart</button>

                </div>
            </section>
        </main>
        <footer>&nbsp;</footer>
        </div>
        )
};

export default ShoppingCart;
