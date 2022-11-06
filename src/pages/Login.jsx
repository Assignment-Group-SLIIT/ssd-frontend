import React, { useState } from 'react';
import { loginUser } from '../services/user.service';
import NavigationBar from './navBar';
import { useNavigate } from 'react-router-dom';
import toastNotification from "../components/toastNotification"

export const Login = () => {

    const navigate = useNavigate();

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
            res.ok ? toastNotification("Success!", "success") : toastNotification("Email or Password is incorrect!", "error")

            const user = JSON.parse(sessionStorage.getItem("user"))
            if(user.type === "worker"){
                sessionStorage.setItem("type" , "Worker")
                navigate("/message");
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
