import React from 'react'

const CreateMessage = () => {

    const createMessage = () => {

    }

    return (
        <div className='login-body'>
            <div id="messageform">
                <h2 id="headerTitle">Create Your Message</h2>
                <form>
                    <div class="row">
                        <label>Message</label>
                        <textarea

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
    )
}

export default CreateMessage