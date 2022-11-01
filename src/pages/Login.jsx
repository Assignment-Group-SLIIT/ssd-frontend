import React from 'react'

export const Login = () => {

    //login method
    const signin = (e) => {
        e.preventDefault();

    }
    return (
        <div className='login-body'>
            <div id="loginform">
                <h2 id="headerTitle">Login</h2>
                <form>
                    <div class="row">
                        <label>Username</label>
                        <input type="text" placeholder="Enter your username" />
                    </div>
                    <div class="row">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" />
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
