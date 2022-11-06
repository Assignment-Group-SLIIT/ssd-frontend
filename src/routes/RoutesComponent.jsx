import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login } from '../pages/Login'
import Register from '../pages/Register'
import CreateMessage from '../pages/createMsg'
import { UploadFile as UploadFile } from '../pages/uploadFile'
// import Footer from '../components/Footer'
// import { Navigationbar } from '../components/Navigationbar'
// import { CreateTemplate } from '../pages/admin/CreateTemplate'
import PrivateRoute from '../utils/PrivateRoute'
import NavigationBar from '../components/NavBar'

export const RoutesComponent = () => {
    return (
        <>
            <Router basename={'/'}>
                <NavigationBar />
                <Routes>
                    <Route path='/' element={<PrivateRoute />} >
                        <Route exact path='/register' element={< Register />} />
                        <Route exact path='/message' element={< CreateMessage />} />
                        <Route exact path='/file' element={< UploadFile />} />
                    </Route>
                    <Route exact path='/login' element={<Login />} />
                </Routes>
                {/* <Footer /> */}
            </Router>
        </>
    )
}
