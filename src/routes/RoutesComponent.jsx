import React, { useEffect, useLayoutEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { Login } from '../pages/Login'
import Register from '../pages/Register'
import CreateMessage from '../pages/createMsg'
import { UploadFile as UploadFile } from '../pages/uploadFile'
import NotFound from '../pages/notFound'
// import Footer from '../components/Footer'
// import { Navigationbar } from '../components/Navigationbar'
// import { CreateTemplate } from '../pages/admin/CreateTemplate'
import PrivateRoute from '../utils/PrivateRoute'
import NavigationBar from '../components/NavBar'
import { getUser } from '../utils/token'

export const RoutesComponent = () => {
    const [userType, setUserType] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const user = getUser();
            setUserType(user?.type.toString().toLowerCase())
        }, 1);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Router basename={'/'}>
                <NavigationBar />
                <Routes>
                    <Route path='/' element={<PrivateRoute />} >
                        {
                            userType === "admin" ?
                                < Route exact path='/register' element={< Register />} />
                                :

                                null

                        }
                        {
                            userType === "worker" ?
                                <Route exact path='/message' element={< CreateMessage />} />
                                :

                                null

                        }
                        {
                            userType === "manager" ?
                                (
                                    <>
                                        <Route exact path='/message' element={< CreateMessage />} />
                                        <Route exact path='/file' element={< UploadFile />} />
                                    </>
                                )
                                :

                                null

                        }
                        {
                            userType == null || userType == undefined || userType === "" ?
                                < Route path='*' element={< Login />} />
                                :
                                null
                        }
                    </Route>
                    <Route exact path='/login' element={< Login />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                {/* <Footer /> */}
            </Router>
        </>
    )
}
