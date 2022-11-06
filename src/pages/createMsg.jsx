import React, { useEffect, useState } from 'react'
import NavigationBar from './navBar'

const CreateMessage = () => {
    const [msg, setMsg] = useState({ value: "", error: "This field cannot be empty", isError: false });

    const createMessage = () => {
        //to validate the user input


    }


    const onInputChange = e => {
        const { value } = e.target;
        const re = /^[A-Z@.a-z0-9]+$/;
        if (value === "" || re.test(value)) {
            setName({ ...msg, value: value })
        }
    }
    useEffect(() => {
        msg.value === "" ? setName({ ...msg, isError: true }) : setName({ ...msg, isError: false });
    }, [msg.value])

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
                                value={msg.value}
                                onChange={onInputChange}
                                class="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
                        </div>

                        <div id="button" class="row">
                            <button onClick={(e) => { createMessage(e) }}>
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