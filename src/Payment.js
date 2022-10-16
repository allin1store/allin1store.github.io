import React from 'react';

// to do:
// 1. display order info on the right column, including:
//      a. items, quantity, total price including tax
//      b. click on the "modify" button -> ShoppingCart.js
//      c. estimated shipping time
// 2. get shipping details
// 3. get payment
//      a. methods
//      b. card details
// 4. submit button
//      a. succcessful page (show order number, items, quantity, receipt, shipping details)
//      b. failure page(optional?)
// 5. (optional?) user login to get the shipping details

const Payment = props => {

    
    const shippingDetails = 
    (<form>
        <fieldset>
            <legend>Shipping Details</legend><br/>
                <label>User Name: 
                    <input type="text" name="userName" id="userName" onChange={(e)=>setUserNameInput(e.target.value)} required/>
                </label><br/><br/>
                <label>Email:
                    <input type={"email"}  name="email" id="email" onChange={(e)=>setEmailInput(e.target.value)} required/>
                </label><br/><br/>
                <label>First Name:
                    <input type="text" name="firstName" id="firstName" onChange={(e)=>setfirstNameInput(e.target.value)} required/>
                </label><br/><br/>
                <label>Last Name:
                    <input type="text" name="lastName" id="lastName" onChange={(e)=>setlastNameInput(e.target.value)} required/>
                </label><br/><br/>
                <label>Contact Number:
                    <input type={"tel"} name="conNumber" id="conNumber" onChange={(e)=>setconNumberInput(e.target.value)} required/>
                </label><br/><br/>
                <label>Address:
                    <textarea name="address" id="address" onChange={(e)=>setaddressInput(e.target.value)} required/>
                </label><br/><br/>
            </fieldset>
    </form>);

    {/* to be completed... */}
    const paymentDetails = (
    <form>
        <fieldset>
            <legend>Payment</legend><br/>
                
        </fieldset>
    </form>);
    
    return (
        <div className="wrapper">
            <main>
            <section id="payment">
                <div className="text">
                    <h2>Payment</h2>
                    
                    {/* left column... */}
                    <div className="payment-leftCol">
                        {shippingDetails}
                        {paymentDetails}

                        {/* function to be completed... */}
                        <button className="btn"  onClick={()=>functionNeeded()}>Pay</button>
                    </div>

                    {/* right column... */}
                    <div className="payment-rightCol">order details</div>
                </div>
            </section>
        </main>
        <footer>&nbsp;</footer>
        </div>
        )
};

export default Payment;
