import React from 'react';
// to do:
// 1. randomly display 9 "Top selling" items, including:
//   a. a picture (link to the Product.js)
//   b. the product name (link to the Product.js)
//   c. product price (link to the Product.js)
// 2. display a list of category names, including:
//   a. a picture (link to the Category.js)
//   b. category name (link to the Category.js)

const Home = props => {
    
    return (
        <div className="wrapper">
            <main>
            <section id="home">
                <div className="text">
                    <h2>Home</h2>
                    
                    {/* to do*/}
                    <h3>Top selling products</h3>
                    <ul>
                        <li id="productPhoto" onClick={()=>props.handleChosenPage('productPage')}>product photo</li>
                        <li id="productName" onClick={()=>props.handleChosenPage('productPage')}>product Name</li>
                        <li id="productPrice" onClick={()=>props.handleChosenPage('productPage')}>price</li>
                    </ul>
                    {/* to do*/}
                    <h3>Shop by category</h3>
                    <ul>
                        <li id="categoryPhoto" onClick={()=>props.handleChosenPage('categoryPage')}>category photo</li>
                        <li id="categoryName" onClick={()=>{props.handleChosenPage('categoryPage')}}>category name</li>
                        
                    </ul>

                </div>
            </section>
        </main>
        <footer>&nbsp;</footer>
        </div>
        )
};

export default Home;
