import AccountCss from './Account.module.css';
import React from 'react';

const ConfirmEmail = (props) => {
    console.log("Account received porps: ", props);

    

        return <div className={AccountCss.container}>
            <div className={AccountCss.form}>
                <h1> Thank you for signing up for the AllInOneStoreAccount!</h1>
                <h2> Please head to the sign in page to log in! Thank you!</h2>
            </div>
        </div>;
    
}


export default ConfirmEmail;