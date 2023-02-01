import axios from "axios"
import { USER_BOI_ERROR, USER_BOI_REQUEST, USER_BOI_SUCCESS } from "./userBoi.types"


export const getUserBoi = (creds) => async (dispatch) => {
    const config = {
        headers: {
            username: creds
        }
    }
    dispatch({
        type: USER_BOI_REQUEST
    });
    
    try {
        let { data } = await axios.get('http://localhost:8001/users/getProfile', config)
        return dispatch({ type: USER_BOI_SUCCESS, payload: data })
    }
    catch ({ response: { data: { message } } }) {
        console.log(message);
        return dispatch({
            type: USER_BOI_ERROR,
            payload: message,
        });

    }
}