import React from 'react';
// to do:
// 1. if no result, render "Sorry...."
// 2. displays maximum 9 products in a page 
//    use "show more" button to render another 9 search results
// 3. show product name, price, picture (provide a link to Product.js)

const Search = props => {
    
    return (
        <div className="wrapper">
            <main>
            <section id="searchPage">
                <div className="text">
                    <h2>Search results:</h2>
                    {/* to do*/}
                    <ul>
                        <li id="productName" onClick={()=>props.handleChosenPage('productPage')}>product name</li>
                        <li id="productPrice" onClick={()=>props.handleChosenPage('productPage')}>price</li>
                        <li id="productPhoto" onClick={()=>props.handleChosenPage('productPage')}>product photo</li>
                    </ul>
                </div>
            </section>
        </main>
        <footer>&nbsp;</footer>
        </div>
        )
};

export default Search;