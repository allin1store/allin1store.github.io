import React from 'react';

// to do: 
// 1. verify user login data (optional?)

const Login = props => {
    
    return (
        <div className="wrapper">
            <main>
            <section id="login">
                <div className="text">
                    <h2>Login Page</h2>
                    <form>
                        <label for="userName">User Name:</label>
                        <input type={"text"} id="userName" name="userName" required></input>
                        <label for="userPassword">Password:</label>
                        <input type={"password"} id="lnauserPasswordme" name="userPassword" required></input>
                                              
                    </form>
                    <button onClick={()=>props.handleChosenPage('userPage')}>Login</button>  
                    <button onClick={()=>props.handleChosenPage('createAccount')}>Sign up</button>
                </div>
            </section>
        </main>
        <footer>&nbsp;</footer>
        </div>
        )
};

export default Login;