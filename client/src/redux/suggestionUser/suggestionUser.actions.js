import axios from "axios"
import { SUGGESTION_USER_ERROR, SUGGESTION_USER_REQUEST, SUGGESTION_USER_SUCCESS } from "./suggestionUser.types"



export const getUserSuggestion = (creds) => async (dispatch) => {
    const config = {
        headers: {
            userid: creds
        }
    }
    console.log(creds,"redux")
    dispatch({ type: SUGGESTION_USER_REQUEST })
    try {
        let { data } = await axios.get("https://nem-insta-backend.onrender.com/users", config)
        return dispatch({ type: SUGGESTION_USER_SUCCESS, payload: data })
    }
    catch (err) {
        console.log(err)
        return dispatch({ type: SUGGESTION_USER_ERROR })
    }
}