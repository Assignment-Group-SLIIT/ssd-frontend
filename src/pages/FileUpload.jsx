import React from 'react'

const FileUpload = () => {

    return (
        <div className='login-body'>
            <div id="fileuploadform">
                <h2 id="fileuploadheaderTitle">Upload Files</h2>
                <form>
                <div class="row">
                    <label>File Upload</label>
                        <input
                            type="file"
                            id="file"
                            name="file"
                            //onChange={(event) => {setfile(event.target.value);} } 
                            />
                </div>
                </form>
                <br></br> <br></br>
            </div>
        </div>
    )
}

export default FileUpload