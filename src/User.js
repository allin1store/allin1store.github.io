import React from 'react';

// to do: 
// 1. display user information (user name, name, email, phone number, address)
// 2. order records
//      a. order numbers
//      b. order status
//      c. products and quantity
//      d. shipping details (name, address)
// 3. allow user to edit their profile (optional?)
//      a. email
//      b. phone number
//      c. password
//      d. address

const User = props => {
    
    return (
        <div className="wrapper">
            <main>
            <section id="user">
                <div className="text">
                    <h2>User Page</h2>
                    {/* to do*/}
                    <ul>
                        <li id="userName">User Name</li>
                        <li id="userEmail">Email</li>
                        <li id="userFirstLastName">First Last Name</li>
                        <li id="userAddress">Address</li>
                        <li id="orders">Active or completed orders</li>
                    </ul>
                    
                </div>
            </section>
        </main>
        <footer>&nbsp;</footer>
        </div>
        )
};

export default User;