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
                <h3 className='text-center' htmlFor="group">Upload Your File Here</h3>

                <hr></hr>
                <br></br>
                <br></br>
                <div className="d-flex flex-column  text-center">
                    <div >
                        <DropzoneArea sendData={sendData} sendProgress={sendProgress} />
                        {fileName.value ? fileName.value.substring(0, 30) + "..." : ''}
                        {fileName.isError && <small className='text-danger'>{fileName.error}</small>}
                    </div>
                    <div className='mt-2'>
                        {!fileName.value && state ? <ProgressBar now={loadingProgress} /> : null}
                    </div >
                </div>
                <br>
                </br>

                <div className="col py-3 text-center">
                    <div id="button" class="row">
                        <button onClick={(e) => { onSubmit(e) }}>
                            Upload
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
