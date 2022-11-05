import React, { useEffect, useState } from 'react'
import DropzoneArea from '../components/DropZoneArea'
import { Form, Row, Col, ProgressBar } from 'react-bootstrap'
import toastNotification from '../components/toastNotification';
import '../styles/upload.styles.scss'


export const uploadFile = () => {
    const [fileName, setFileName] = useState({ value: "", error: "Please select a file", isError: false });
    const [loadingProgress, setLoadingProgress] = useState(10)
    const [state, setState] = useState(false)

    useEffect(() => {
        fileName.value === "" ? setFileName({ ...fileName, isError: true }) : setFileName({ ...fileName, isError: false })
    }, [fileName.value])

    const sendProgress = (data) => {
        console.log("DATAAAA", data)
        setState(true)
        setLoadingProgress(data)
    }

    // useEffect(() => {
    //     const user = JSON.parse(sessionStorage.getItem("user"));

    //     if (user.groupId != "") {
    //         setGroupId(user?.groupId)
    //         getOneGroup(user?.groupId).then((res) => {
    //             console.log("res>>", res.data)
    //             if (res.ok) {
    //                 setTopic(res?.data?.researchTopic)
    //                 setField(res?.data?.researchField);
    //             } else {
    //                 console.log("error while getting group data")
    //             }
    //         }).catch((err) => {
    //             console.log("error while getting group data", err.error)
    //         })
    //     }
    // }, [])


    const sendData = (data) => {
        console.log("Child data", data)
        setFileName({ ...fileName, value: data })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const payload = {
            document: fileName.value
        }
        // if (!email.isError && !fileName.isError) {
        //     // console.log("payload>>", payload)
        //     createProjectProposal(payload).then((res) => {
        //         if (res.ok) {
        //             toastNotification("Project proposal has been submitted successfully!", "success")
        //             window.location.reload()
        //         } else {
        //             toastNotification("Error occured!", "error")
        //         }
        //     }).catch((err) => {
        //         toastNotification("Error occured!", "error")
        //         console.log("error while registering>>", err.err)
        //     })
        // }

    }

    return (
        <div className='template-content-container'>
            <div className='create-template-form'>
                <div className='d-flex flex-row justify-content-center text-center bg-danger text-white'>
                    <h3 htmlFor="group">File Upload</h3>
                </div>
                <hr></hr>
                <br></br>
                <div class="d-flex flex-row">
                    <div class="p-2">Flex item 1</div>
                    <div class="p-2">Flex item 2</div>
                    <div class="p-2">Flex item 3</div>
                </div>
                <div className="d-flex flex-row">
                    <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                        <Row>

                            <Col>

                                <div className='col-4'>
                                    <DropzoneArea sendData={sendData} sendProgress={sendProgress} />
                                    {fileName.value ? fileName.value.substring(0, 30) + "..." : ''}
                                    {fileName.isError && <small className='text-danger'>{fileName.error}</small>}
                                </div>
                                <div className='col-6'>
                                    <div>
                                        {!fileName.value && state ? <ProgressBar now={loadingProgress} /> : ""}
                                    </div>

                                </div >
                            </Col>

                        </Row>
                    </Form.Group>

                    <br></br>

                    <button className="btn btn-primary">
                        test
                    </button>

                    <div className="col py-3 text-center">
                        <div id="button" class="row">
                            <button onClick={(e) => { onSubmit(e) }}>
                                Upload
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
