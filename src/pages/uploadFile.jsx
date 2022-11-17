import '../styles/upload.styles.scss'
import React, { useEffect, useState } from 'react'
import DropzoneArea from '../components/DropZoneArea'
import { ProgressBar } from 'react-bootstrap'
import toastNotification from '../components/toastNotification';
import { uploadFile } from '../services/filesupload.service';


export const UploadFile = () => {
    const [fileName, setFileName] = useState({ value: "", error: "Please select a file", isError: false });
    const [loadingProgress, setLoadingProgress] = useState(10)
    const [state, setState] = useState(false);
    const [email, setEmail] = useState("");

    useEffect(() => {
        fileName.value === "" ? setFileName({ ...fileName, isError: true }) : setFileName({ ...fileName, isError: false })
    }, [fileName.value])

    const sendProgress = (data) => {
        setState(true)
        setLoadingProgress(data)
    }

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("user"));
        setEmail(user?.email);
    }, [])


    const sendData = (data) => {
        setFileName({ ...fileName, value: data })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const payload = {
            fileLink: fileName.value,
            email
        }
        if (!fileName.isError) {
            uploadFile(payload).then((res) => {
                if (res.ok) {
                    toastNotification("File has been uploaded successfully!", "success")
                    window.location.reload();
                } else {
                    toastNotification("Error occured!", "error")
                }
            }).catch((err) => {
                toastNotification("Error occured!", "error")
            })
        }

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
                    <div id="button" class="row ">
                        <button className='buttonEnabled' onClick={(e) => { onSubmit(e) }}>
                            Upload
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
