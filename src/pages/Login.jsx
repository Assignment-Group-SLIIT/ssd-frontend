import React, { useState } from 'react';
import { loginUser } from '../services/user.service';
import { useNavigate } from 'react-router-dom';
import toastNotification from "../components/toastNotification"

export const Login = () => {

    const navigate = useNavigate();


    const login_valid_count = 5;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let [isDisabledLogin, setDisabledLogin] = useState(false);
    let [login_count, setLoginCount] = useState(0);

    //login method
    const signin = (e) => {
        e.preventDefault();

        const payload = {
            email,
            password
        }

        const checkingLogin = async () => {
            login_count = login_count + 1;
            setLoginCount(login_count);
            // console.log("loffff", login_count, login_valid_count)
            if (login_count === login_valid_count) {
                setDisabledLogin(true)
            }

        }

        const enablingBtn = () => {
            setDisabledLogin(false);
            setLoginCount(0);
        }

        loginUser(payload).then((res) => {
            // console.log("response", res)
            if (res.ok) {
                toastNotification("Success!", "success");

                const user = JSON.parse(sessionStorage.getItem("user"))
                if (user.type === "Worker") {
                    sessionStorage.setItem("type", "Worker")
                    toastNotification("Login as a Worker!", "success");
                    navigate("/message");
                } else if (user.type === "Admin") {
                    sessionStorage.setItem("type", "Admin")
                    toastNotification("Login as a Admin!", "success");
                    navigate("/register");
                } else {
                    sessionStorage.setItem("type", "Manager")
                    toastNotification("Login as a Manager!", "success");
                    navigate("/file");
                }
            } else if (res.ok === false) {
                console.log("error!")
                toastNotification("Email or Password is incorrect!", "error")
                // checkingLogin()
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
                        {/* {console.log("is>>>", isDisabledLogin)} */}
                        <button
                            className={isDisabledLogin ? 'buttonDisabled' : 'buttonEnabled'}
                            disabled={isDisabledLogin ? true : false}
                            onClick={(e) => { signin(e) }}>
                            Signin
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
