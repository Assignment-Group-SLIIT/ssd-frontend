import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavigationBar = () => {
    const location = useLocation();
    const [userType, setUserType] = useState("");

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("user"));
        setUserType(user?.type.toLowerCase());
    }, [])

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand font-weight-bold font-weight-bold" href="#"><h2>-Content Manager-</h2></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        {userType === "admin" ? (<Link to="/register"><a class="nav-item nav-link active" href="#">User Registartion<span class="sr-only">(current)</span></a></Link>) : null}
                        {userType === "manager" ? (<Link to=""><a class="nav-item nav-link active" href="#">File Upload</a></Link>) : null}
                        {userType === "manager" || userType === "worker" ? (<Link to="/message"><a class="nav-item nav-link active" href="#">Save Message</a></Link>) : null}
                        {!location.pathname.toLowerCase().includes("login") ? (<a class="nav-item nav-link active" href="#">Logout</a>) : null}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavigationBar