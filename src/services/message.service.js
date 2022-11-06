import API from "./API";

export const createMessage = async (userPayload) => {
    console.log("userPayload ", userPayload)
    try {
        const response = await API.post("messages/", userPayload);
        console.log("res>>", response)
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

export const getAllMessages = async () => {
    try {
        const response = await API.get("messages/")
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

export const getAllMessagesofUser = async (email) => {
    try {
        const response = await API.get(`messages/${email}`)
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