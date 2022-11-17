import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <div div className="content-body">
                <section className="page_404">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 ">
                                <div className="col-sm-12 col-sm-offset-1  text-center">
                                    <div className="four_zero_four_bg">
                                        <h1 className="text-center ">Sorry!</h1>


                                    </div>

                                    <div className="contant_box_404">
                                        <h3 className="h2">
                                            Look like you're lost
                                        </h3>

                                        <p>You don't have access to this page!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default NotFound