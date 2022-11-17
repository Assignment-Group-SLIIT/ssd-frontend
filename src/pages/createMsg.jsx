import React, { useEffect, useState } from 'react'
import { createMessage } from '../services/message.service';
import toastNotification from "../components/toastNotification"

const CreateMessage = () => {
    const [msg, setMsg] = useState({ value: "", error: "This field cannot be empty", isError: false });


    const sendMessage = (e) => {
        e.preventDefault();

        const user = JSON.parse(sessionStorage.getItem("user"))
        // console.log("email>>", user)
        const payload = {
            email: user.email,
            description: msg.value
        }

        createMessage(payload).then((res) => {
            // console.log("response", res)
            res.ok ? toastNotification("Success!", "success") : toastNotification("Email or Message is incorrect!", "error")



        }).catch((err) => {
            toastNotification("Error occured!", "error")
            console.log("error while sign in >>", err.ok)

        })

    }


    const onInputChange = e => {
        const { value } = e.target;
        const re = /^[A-Z@.a-z0-9]+$/;
        if (value === "" || re.test(value)) {
            setMsg({ ...msg, value: value })
        }
    }
    useEffect(() => {
        msg.value === "" ? setMsg({ ...msg, isError: true }) : setMsg({ ...msg, isError: false });
    }, [msg.value])

    return (
        <div>
            <div className='login-body'>
                <div id="messageform">
                    <h2 id="headerTitle">Create Your Message</h2>
                    <form>
                        <div class="row">
                            <label>Message</label>
                            <textarea
                                value={msg.value}
                                onChange={onInputChange}
                                class="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
                        </div>

                        <div id="button" class="row">
                            <button
                                className='buttonEnabled'
                                onClick={(e) => { sendMessage(e) }}>
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