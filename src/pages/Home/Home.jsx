import { Link } from "react-router-dom";
import { Breadcrumb} from "antd";
import HomeCss from "./Home.module.css"

const Home = (props) => {
return (
    <div style={{height: "100%", width: "100%"}}>
        <Breadcrumb className={HomeCss.crumb}>
            <Breadcrumb.Item style={{cursor: 'pointer'}}>Home</Breadcrumb.Item>
        </Breadcrumb>
        <div className={HomeCss.container}>
            <div className="homePage">
            
            <h1>Welcome to All In One Store</h1>
            <br/>
            <h2>Compare the price before you pay!</h2>
            <Link to="/shopping">Happy Shopping</Link>
            <br/><br/><br/>
            <h2>Be our member and save more!</h2>
            <Link to="/account">Sign up now</Link>
        </div>
        </div>
    </div>
        
    )
}


export default Home;