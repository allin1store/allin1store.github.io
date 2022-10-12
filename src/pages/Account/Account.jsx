import AccountCss from './Account.module.css';


const Account = (props) => {
    console.log("Account received porps: ", props);
    return <div className={AccountCss.container}>Account page is in development....</div>;
}


export default Account;