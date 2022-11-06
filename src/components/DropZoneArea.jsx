import React, { useState, Component } from 'react'
import { DropzoneDialog } from 'material-ui-dropzone'
import { storage } from '../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import toastNotification from './toastNotification';


function DropzoneArea(props) {
    const [files, setFiles] = useState([])
    const [open, setOpen] = useState(false)


    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const handleSave = (e) => {
        // console.log("Method called", e)
        setFiles(e)
    }

    const sendData = (data) => {
        props.sendData(data);
    }

    const sendProgress = (data) => {
        props.sendProgress(data);
    }

    const handleSubmit = (e) => {
        // e.preventDefault()

        const file = files[0];

        if (!file) return;

        const storageRef = ref(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on("state_changed",
            (snapshot) => {
                const progress =
                    Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                console.log("upload progress>>", progress)
                sendProgress(progress)
                // setProgresspercent(progress);
            },
            (error) => {
                toastNotification("Error while uploading your file", "error")

            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    // console.log("url>>>", downloadURL);
                    sendData(downloadURL)
                    // toastNotification("File uploaded successfully!", "success")

                });
            }
        );

        handleClose();
    }


    return (
        <div>
            <button className="btn-primary p-1 " onClick={(e) => { handleOpen(e) }}>
                select your file &nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
            </button>

            <DropzoneDialog
                open={open}
                // onSave={() => { onFileUpload() }}
                onSave={(e) => { handleSubmit(e) }}
                // acceptedFiles={['/doc', '*/csv', 'lab-assessment/pdf']}

                onDrop={(e) => { handleSave(e) }}
                showPreviews={true}
                maxFileSize={5000000}
                onClose={(e) => { handleClose(e) }}
            />
        </div>
    );


}



export default DropzoneArea;