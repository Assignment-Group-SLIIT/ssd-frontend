import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand font-weight-bold" href="#"><h2>Content~Manager</h2></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/register"><a class="nav-item nav-link active" href="#">User Registartion<span class="sr-only">(current)</span></a></Link>
                        <Link to=""><a class="nav-item nav-link active" href="#">File Upload</a></Link>
                        <Link to="/message"><a class="nav-item nav-link active" href="#">Save Message</a></Link>
                        <a class="nav-item nav-link active" href="#">Logout</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavigationBar