import React, { useState } from 'react';
import NavigationBar from './navBar'
import { createMessage } from '../services/message.service';
import toastNotification from "../components/toastNotification"
import { useEffect } from 'react';

const CreateMessage = () => {

    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        //console.log("sessionStorage " , sessionStorage.user);
        //console.log("sessionStorage " , email);
    })

    const sendMessage = (e) => {
        e.preventDefault();

        const user = JSON.parse(sessionStorage.getItem("user"))

        const payload = {
            email:user.email,
            description,
        }

        createMessage(payload).then((res) => {
            console.log("response" , res)
            res.ok ? toastNotification("Success!", "success") : toastNotification("Email or Message is incorrect!", "error")


          
        }).catch((err) => {
            console.log("error while sign in >>", err.ok)

        })

    }

    return (
        <div>
            <NavigationBar />
            <div className='login-body'>
                <div id="messageform">
                    <h2 id="headerTitle">Create Your Message</h2>
                    <form>
                        <div class="row">
                            <label>Message</label>
                            <textarea
                                class="form-control" 
                                onChange={e => { setDescription(e.target.value); }}
                                id="exampleFormControlTextarea1" 
                                rows="7"></textarea>
                        </div>

                        <div id="button" class="row">
                            <button onClick={(e) => { sendMessage(e) }}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateMessage