import React from 'react';

// to do:
// 1. a form to get user informations(user name, name, email, phone number, address)
// 2. verify the inputs (optional?)
// 3. show created account
// 4. a button "Shop Now" -> Home.js

const CreateAccount = props => {
    
    return (
        <div className="wrapper">
            <main>
            <section id="createAccount">
                <div className="text">
                    <h2>Create a new account</h2>

                    <form>
                        <fieldset>
                            <legend>All fields are required</legend><br/>
                                <label>User Name: 
                                    <input type="text" name="userName" id="userName" onChange={(e)=>setUserNameInput(e.target.value)} required/>
                                </label><br/><br/>
                                <label>Email:
                                    <input type={"email"} name="email" id="email" onChange={(e)=>setEmailInput(e.target.value)} required/>
                                </label><br/><br/>
                                <label>First Name:
                                    <input type="text" name="firstName" id="firstName" onChange={(e)=>setfirstNameInput(e.target.value)} required/>
                                </label><br/><br/>
                                <label>Last Name:
                                    <input type="text" name="lastName" id="lastName" onChange={(e)=>setlastNameInput(e.target.value)} required/>
                                </label><br/><br/>
                                <label>Contact Number:
                                    <input type={"tel"} name="conNumber" id="conNumber" onChange={(e)=>setconNumberInput(e.target.value)} required/>
                                </label><br/><br/>
                                <label>Address:
                                    <textarea name="address" id="address" onChange={(e)=>setaddressInput(e.target.value)} required/>
                                </label><br/><br/>
        
                                {/* function to be completed... */}
                                <button className="btn" onClick={()=>functionNeeded()}>Create</button>
                                <button className="btn" type={"reset"} onClick={()=>functionNeededtoClearStates()}>Reset</button>
                        </fieldset>
                    </form>
                </div>
            </section>
        </main>
        <footer>&nbsp;</footer>
        </div>
        )
};

export default CreateAccount;