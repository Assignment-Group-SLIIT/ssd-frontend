import React from 'react'

const Register = () => {
    //login method
    const signup = (e) => {
        e.preventDefault();

    }
    return (
        <div className='login-body'>
            <div id="loginform">
                <h2 id="headerTitle">Create User Accounts</h2>
                <form>
                    <div class="row">
                        <label>Username</label>
                        <input type="text" placeholder="Enter your username" />
                    </div>
                    <div class="row">
                        <label>Email</label>
                        <input type="text" placeholder="Enter your username" />
                    </div>
                    <div class="row">
                        <label>Phone Number</label>
                        <input type="number" placeholder="Enter your username" />
                    </div>
                    <div class="row">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" />
                    </div>
                    <div class="row">
                        <label>Confirm Password</label>
                        <input type="password" placeholder="Enter your password" />
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