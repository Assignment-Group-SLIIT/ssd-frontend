import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login } from '../pages/Login'
// import Footer from '../components/Footer'
// import { Navigationbar } from '../components/Navigationbar'
// import { CreateTemplate } from '../pages/admin/CreateTemplate'
import PrivateRoute from '../utils/PrivateRoute'

export const RoutesComponent = () => {
    return (
        <>
            <Router basename={'/'}>
                <Routes>
                    <Route path='/' element={<PrivateRoute />} >
                        {/* <Route exact path='/student/dashboard' element={< StudentDashboard />} /> */}
                    </Route>
                    <Route exact path='/login' element={<Login />} />
                </Routes>
                {/* <Footer /> */}
            </Router>
        </>
    )
}
