import { setUserSession } from "../utils/token";
import API from "./API";

export const registerUser = async (userPayload) => {

    try {
        const response = await API.post("users/register", userPayload);
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

export const loginUser = async (user) => {

    try {
        const response = await API.post("users/login", user)
        if (response.status === 200) {
            setUserSession(response.data.token, response.data)
            return {
                ok: true,
                data: response.data
            }
        }

    } catch (error) {
        return { ok: false, err: error.data }
    }
}

export const getAllUsers = async () => {
    try {
        const response = await API.get("users/")
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