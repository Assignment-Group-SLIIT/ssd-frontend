import React, { useState, useEffect } from 'react'
import { registerUser } from '../services/user.service';
import ReCAPTCHA from "react-google-recaptcha";
import globals from '../config/globals';

const Register = () => {

    const googleRecaptchaSiteKey = globals.RECAPTCHA_SITE_KEY;

    const [name, setName] = useState({ value: "", error: "This field cannot be empty", isError: false });
    const [phone, setPhone] = useState({ value: "", error: "This field cannot be empty", isError: false });
    const [email, setEmail] = useState({ value: "", error: "This field cannot be empty", isError: false });
    const [password, setPassword] = useState({ value: "", error: "This field cannot be empty", isError: false });
    const [confirmPassword, setConfirmPassword] = useState({ value: "", error: "This field cannot be empty", isError: false });
    const [type, setType] = useState("");
    let [isAcknowledgeConfirmed, setAcknowledgeConfirmed] = useState(false);


    //to validate the user input
    const onInputChange = e => {


        const { value } = e.target;
        const re = /^[A-Z@.a-z0-9]+$/;


        if (value === "" || re.test(value)) {

            if (e.target.id == "userName") {
                setName({ ...name, value: value })
            }
            if (e.target.id == "email") {
                setEmail({ ...email, value: value })
            }
            if (e.target.id == "phoneNumber") {
                setPhone({ ...phone, value: value })
            }

        }
    }

    //login method
    const signup = (e) => {
        e.preventDefault();
        const userPayload = {
            name: name.value,
            phone: phone.value,
            email: email.value,
            password: password,
            type: type
        }
        if (password === confirmPassword) {
            registerUser(userPayload).then((response) => {
                alert("success")
                window.location.reload();

            }).catch((err) => {
                console.log("error while staff signup", err.error)
                alert("somthing went wrong !!!!");
            })
        } else {
            alert("password not matching");
        }
    }

    const changeAcknowledgeState = (value) => {
        if (value) {

            setAcknowledgeConfirmed(true);
        } else {
            setAcknowledgeConfirmed(false);
        }

    }

    useEffect(() => {

        name.value === "" ? setName({ ...name, isError: true }) : setName({ ...name, isError: false });
        phone.value === "" ? setPhone({ ...phone, isError: true }) : setPhone({ ...phone, isError: false });
        email.value === "" ? setEmail({ ...email, isError: true }) : setEmail({ ...email, isError: false });
        password.value === "" ? setPassword({ ...password, isError: true }) : setPassword({ ...password, isError: false });
        confirmPassword.value === "" ? setConfirmPassword({ ...confirmPassword, isError: true }) : setConfirmPassword({ ...confirmPassword, isError: false });

    }, [name.value, phone.value, email.value]);


    return (
        <div>
            <div className='login-body'>
                <div id="registerform">
                    <h2 id="registerheaderTitle">Create User Accounts</h2>
                    <form>
                        <div class="row">
                            <label>Username</label>
                            <input type="text"
                                id="userName"
                                placeholder="Enter your username"
                                value={name.value}
                                // onChange={e => { checkSpecialChars(e.target.value); onInputChange(e) }}
                                onChange={onInputChange}
                            />
                            {name.isError && <small className='text-danger'>{name.error}</small>}
                        </div>
                        <div class="row">
                            <label>Email</label>
                            <input type="text"
                                id="email"
                                value={email.value}
                                placeholder="Enter your email"
                                onChange={onInputChange}
                            />
                        </div>
                        <div class="row">
                            <label>Phone Number</label>
                            <input
                                type="number"
                                id="phoneNumber"
                                value={phone.value}
                                placeholder="Enter your phone number"
                                onChange={onInputChange}
                            />
                        </div>
                        <div class="row">
                            <label>User Type</label>
                            <select
                                id="userType"
                                className="form-control "
                                onChange={(e) => setType(e.target.value)}
                                required>
                                <option  >Select User Type</option>
                                <option id="type1" value="Worker" >Worker</option>
                                <option id="type2" value="Manager">Manager</option>
                            </select>
                        </div>
                        <div class="row">
                            <label>Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div class="row">
                            <label>Confirm Password</label>
                            <input
                                id="confirmPassword"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                type="password"
                                placeholder="Confirm your password"
                            />
                        </div>
                        <div className="mt-5 pl-5">
                            <ReCAPTCHA
                                sitekey={googleRecaptchaSiteKey}
                                onChange={changeAcknowledgeState}
                            />,
                        </div>
                        <div id="button" class="row">
                            <button
                                className={isAcknowledgeConfirmed === false ? 'buttonDisaaled' : 'buttonEnabled'}
                                disabled={
                                    (isAcknowledgeConfirmed === false) ? true : false
                                }
                                onClick={(e) => { signup(e) }}>
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