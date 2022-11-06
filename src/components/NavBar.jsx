import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { removeUserSession } from '../utils/token'

const NavigationBar = () => {
    let navigate = useNavigate();
    const location = useLocation();
    const [userType, setUserType] = useState("");

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("user"));
        setUserType(user?.type.toLowerCase());
    }, [])

    const logout = () => {
        removeUserSession();
        navigate('/login')
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light p-3 px-4">
                <a class="navbar-brand font-weight-bold font-weight-bold" href="#"><h2>-Content Manager-</h2></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        {userType === "admin" ? (<Link to="/register"><span class="nav-item nav-link active">User Registartion<span class="sr-only">(current)</span></span></Link>) : null}
                        {userType === "manager" ? (<Link to=""><span class="nav-item nav-link active" >File Upload</span></Link>) : null}
                        {userType === "manager" || userType === "worker" ? (<Link to="/message"><span class="nav-item nav-link active" >Save Message</span></Link>) : null}
                        {!location.pathname.toLowerCase().includes("login") ? (<span class="nav-item nav-link active" onClick={() => logout()}>Logout</span>) : null}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavigationBar