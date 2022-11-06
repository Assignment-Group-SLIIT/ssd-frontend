import React, { useState } from 'react';
import { loginUser } from '../services/user.service';

export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //login method
    const signin = (e) => {
        e.preventDefault();
        const payload = {
            email,
            password
        }

        loginUser(payload).then((res) => {
            console.log("response" , res)
            const user = JSON.parse(sessionStorage.getItem("user"))
            if(user.type === "Worker"){
                sessionStorage.setItem("type" , "Worker")
            }else{
                sessionStorage.setItem("type" , "Manager")
            }
        }).catch((err) => {
            console.log("error while sign in >>", err.ok)

        })

    }
    return (
        <div className='login-body'>
            <div id="loginform">
                <h2 id="headerTitle">Login</h2>
                <form>
                    <div class="row">
                        <label>Email</label>
                        <input 
                            type="text" 
                            placeholder="Enter your email" 
                            onChange={e => { setEmail(e.target.value); }}
                            />
                    </div>
                    <div class="row">
                        <label>Password</label>
                        <input 
                            type="password" 
                            placeholder="Enter your password" 
                            onChange={e => { setPassword(e.target.value); }}
                            />
                    </div>
                    <div id="button" class="row">
                        <button onClick={(e) => { signin(e) }}>
                            Signin
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
