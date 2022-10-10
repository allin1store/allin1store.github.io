// Packages
import React, { useEffect } from 'react';
import { useState } from 'react';

// Import Font Awsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCartShopping, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'



// Files
import Search from './Search.js';
import User from './User.js';
import Login from './Login.js';
import CreateAccount from './CreateAccount.js';
import ShoppingCart from './ShoppingCart.js';
import AboutUs from './AboutUs.js';
import Reference from './Reference.js';
import Home from './Home.js';
import Payment from './Payment.js';
import Product from './Product.js';

const App = props => {

    const [chosenPage, setChosenPage] = useState("home");

    const handleChosenPage = (page)=>{
        setChosenPage(page);
    };


    // temp home page only
    // use the Home.js to render the updated home page
    const homePage = (<div className="wrapper">

                        <main>
                            <section id="home">
                                <div className="text">
                                    <h2>Introduction</h2>
                                    <p>Welcome to AllinOne Store!</p>
                                    <p>We will have our grand opening soon. Please stay tuned!</p>
                                </div>
                            </section>
                            <div id="construction"></div>
                        </main>

                        <footer>&nbsp;</footer>
                    </div>);
    
    
    return (
        <>
            <header>
                <h1>AllinOne Store</h1>
            </header>
            
            <div className='horizontalNav'>
                {/* To do: search bar function */}
                <div className="searchBar">
                    <form>
                        <input type="search" name="search" placeholder='Search All In One Store'></input>
                        <span class="searchBtn" onClick={()=>{setChosenPage("searchPage")}}> {<FontAwesomeIcon icon={faMagnifyingGlass} />}</span>
                    </form>
                </div>
                <ul>
                    {/* To do: user login function */}
                    <li><a onClick={()=>{setChosenPage("login")}}><FontAwesomeIcon icon={faUser} />Account</a></li>
                    {/* To do: shopping cart function */}
                    <li><a onClick={()=>{setChosenPage("shoppingCartPage")}}><FontAwesomeIcon icon={faCartShopping} />Cart</a></li>
                </ul>
            </div>

            <body>
                <nav className='verticalNav'>
                    <ul>
                        <li> <a onClick={()=>{setChosenPage("homePage")}}>Home </a></li>
                        <li> <a onClick={()=>{setChosenPage("aboutUsPage")}}>About Us </a></li>
                        <li> <a onClick={()=>{setChosenPage("referencePage")}}>Reference</a></li>
                    </ul>
                </nav>

                <div>
                    {/* After updating the Home.js, change "homePage" to <Home/> on line 72*/}
                    {chosenPage == "aboutUsPage"? <AboutUs/>
                    :chosenPage == "referencePage"? <Reference/> 
                    :chosenPage == "login"? <Login handleChosenPage={handleChosenPage}/>
                    :chosenPage == "shoppingCartPage"? <ShoppingCart  handleChosenPage={handleChosenPage}/>
                    :chosenPage == "searchPage" ? <Search handleChosenPage={handleChosenPage}/>
                    :chosenPage == "userPage" ? <User handleChosenPage={handleChosenPage}/> 
                    :chosenPage == "createAccount" ? <CreateAccount handleChosenPage={handleChosenPage}/>
                    :chosenPage == "paymentPage" ? <Payment handleChosenPage={handleChosenPage}/>
                    :chosenPage == "productPage" ? <Product handleChosenPage={handleChosenPage}/>
                    :<Home  handleChosenPage={handleChosenPage}/>}

                </div>

            </body>
            
            
            
            
        </>
        
    )
};

export default App;