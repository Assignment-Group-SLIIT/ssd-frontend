import React, { useState } from 'react';
import { loginUser } from '../services/user.service';
import { useNavigate } from 'react-router-dom';
import toastNotification from '../components/toastNotification';
import { useEffect } from 'react';

export const Login = () => {

    const navigate = useNavigate();


    const login_valid_count = 5;

    const [email, setEmail] = useState({ value: "", error: "This field cannot be empty", isError: false });
    const [password, setPassword] = useState("");
    const [sessionTime, setSessionTime] = useState(sessionStorage.getItem("Invalid Session"))


    let [isDisabledLogin, setDisabledLogin] = useState(true);
    let [login_count, setLoginCount] = useState(0);


    useEffect(() => {

        if (sessionTime !== "3600000" && login_count <= login_valid_count) {
            setDisabledLogin(false)
        }
    }, [])


    useEffect(() => {
        email.value === "" ? setEmail({ ...email, isError: true }) : setEmail({ ...email, isError: false });
    }, [email.value])


    //to validate the user input
    const onInputChange = e => {

        console.log("ee>>", e.target)

        const { value } = e.target;
        const re = /^[A-Z@.a-z0-9]+$/;


        if (value === "" || re.test(value)) {

            if (e.target.id == "email") {
                setEmail({ ...email, value: value })
            }
        }

    }


    //login method
    const signin = (e) => {
        e.preventDefault();

        const payload = {
            email: email.value,
            password: password
        }

        const checkingLogin = async () => {
            login_count = login_count + 1;
            setLoginCount(login_count);
            // console.log("loffff", login_count, login_valid_count)
            if (login_count === login_valid_count) {
                setDisabledLogin(true)
                console.log(parseInt(sessionTime))
                setTimeout(() => { enablingBtn() }, parseInt(sessionTime))
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
                sessionStorage.removeItem("Invalid Session")
                if (user.type === "Worker") {
                    sessionStorage.setItem("type", "Worker")
                    navigate("/message");
                } else if (user.type === "Admin") {
                    sessionStorage.setItem("type", "Admin")
                    navigate("/register");
                } else {
                    sessionStorage.setItem("type", "Manager")
                    navigate("/file");
                }
            } else if (res.ok === false) {
                sessionStorage.setItem("Invalid Session", "3600000")
                setSessionTime(sessionStorage.getItem("Invalid Session"))
                checkingLogin()
                toastNotification("Email or Password is incorrect!", "error")
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
                            id="email"
                            type="text"
                            value={email.value}
                            placeholder="Enter your email"
                            // onChange={e => { setEmail(e.target.value); }}
                            onChange={onInputChange}
                        />
                    </div>
                    <div class="row">
                        <label>Password</label>
                        <input
                            id="password"
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
