import API from "./API";

export const uploadFile = async (userPayload) => {

    try {
        const response = await API.post("files/", userPayload);
        if (response.status === 201) {
            return {
                ok: true,
                data: response.data
            }
        }
    } catch (error) {
        return { ok: false, err: error.data }
    }

}

export const getAllFiles = async () => {
    try {
        const response = await API.get("files/")
        if (response.status === 200) {
            return {
                ok: true,
                data: response.data
            }
        }
    } catch (error) {
        return { ok: false, err: error.data }
    }
}

export const getAllFilesofUser = async (email) => {
    try {
        const response = await API.get(`files/${email}`)
        if (response.status === 200) {
            return {
                ok: true,
                data: response.data
            }
        }
    } catch (error) {
        return { ok: false, err: error.data }
    }
}