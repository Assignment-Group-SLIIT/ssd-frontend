import React from 'react'
import NavigationBar from './navBar';

const Register = () => {
    //login method
    const signup = (e) => {
        e.preventDefault();

    }
    return (<div>
        <NavigationBar />

        <div className='login-body'>
            <div id="registerform">
                <h2 id="registerheaderTitle">Create User Accounts</h2>
                <form>
                    <div class="row">
                        <label>Username</label>
                        <input type="text"
                            placeholder="Enter your username"
                        //onChange={e => { setUserType(e.target.value); }} 
                        />
                    </div>
                    <div class="row">
                        <label>Email</label>
                        <input type="text"
                            placeholder="Enter your email"
                        //onChange={e => { setEmail(e.target.value); }}
                        />
                    </div>
                    <div class="row">
                        <label>Phone Number</label>
                        <input
                            type="number"
                            placeholder="Enter your phone number"
                        //onChange={e => { setPhoneNumberType(e.target.value); }}
                        />
                    </div>
                    <div class="row">
                        <label>User Type</label>
                        <select
                            id="userType"
                            className="form-control "
                            // onChange={e => { setUserType(e.target.value); }}
                            required>
                            <option  >Select User Type</option>
                            <option id="type1" value="Worker" >Worker</option>
                            <option id="type2" value="Manager">Manager</option>
                        </select>
                    </div>
                    <div class="row">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                        //onChange={e => { setPassword(e.target.value); }}
                        />
                    </div>
                    <div class="row">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                        //onChange={e => { setConfirmPassword(e.target.value); }}
                        />
                    </div>
                    <div id="button" class="row">
                        <button onClick={(e) => { signup(e) }}>
                            Signup
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Register