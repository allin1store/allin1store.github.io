import React from 'react';

// to do: 
// 1. display user information (user name, name, email, phone number, address)
// 2. order records
//      a. order numbers
//      b. order status
//      c. products and quantity
//      d. shipping details (name, address)
// 3. a "modify" button: allow user to edit their profile (optional?)
//      a. email
//      b. phone number
//      c. password
//      d. address
// 4. "log out" button -> Home.js

const Account = props => {
    
    return (
        <div className="wrapper">
            <main>
            <section id="account">
                <div className="text">
                    <h2>Account Page</h2>
                    {/* to do*/}
                    <ul>
                        <li id="userName">User Name</li>
                        <li id="userEmail">Email</li>
                        <li id="userFirstLastName">First Last Name</li>
                        <li id="userAddress">Address</li>
                        <li id="orders">Active or completed orders</li>
                        <li id="modify">Modify button</li>
                        <li id="logout">Logout button</li>
                    </ul>
                    
                </div>
            </section>
        </main>
        <footer>&nbsp;</footer>
        </div>
        )
};

export default Account;
