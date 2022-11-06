import React, { useState } from 'react';
import { registerUser } from '../services/user.service';

const Register = () => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [type, setType] = useState("");

    //login method
    const signup = (e) => {
        e.preventDefault();
        console.log("data coming " , name)
        const userPayload = {
            name,
            phone,
            email,
            password,
            type
        }

        if(password === confirmPassword){
            registerUser(userPayload).then((response) => {
                console.log("data coming " , userPayload)
               
                    alert("success")
               
            }).catch((err) => {
                console.log("error while staff signup", err.error)
            })
        } else {
            alert("password not matching");
        }
        }

    return (
        <div className='login-body'>
            <div id="registerform">
                <h2 id="registerheaderTitle">Create User Accounts</h2>
                <form>
                    <div class="row">
                        <label>Username</label>
                        <input type="text"
                            placeholder="Enter your username"
                        onChange={e => { setName(e.target.value); }} 
                        />
                    </div>
                    <div class="row">
                        <label>Email</label>
                        <input type="text"
                            placeholder="Enter your email"
                        onChange={e => { setEmail(e.target.value); }}
                        />
                    </div>
                    <div class="row">
                        <label>Phone Number</label>
                        <input
                            type="number"
                            placeholder="Enter your phone number"
                        onChange={e => { setPhone(e.target.value); }}
                        />
                    </div>
                    <div class="row">
                        <label>User Type</label>
                        <select
                            id="userType"
                            className="form-control "
                            onChange={e => { setType(e.target.value); }}
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
                        onChange={e => { setPassword(e.target.value); }}
                        />
                    </div>
                    <div class="row">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                        onChange={e => { setConfirmPassword(e.target.value); }}
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
    )
}

export default Register