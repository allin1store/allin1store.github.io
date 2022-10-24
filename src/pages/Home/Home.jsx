import { Link } from "react-router-dom";

const Home = (props) => {
return (
        <div className="homePage">
            
            <h1>Welcome to All In One Store</h1>
            <br/>
            <h2>Compare the price before you pay!</h2>
            <Link to="/shopping">Happy Shopping</Link>
            <br/><br/><br/>
            <h2>Be our member and save more!</h2>
            <Link to="/account">Sign up now</Link>
        </div>
    )
}


export default Home;