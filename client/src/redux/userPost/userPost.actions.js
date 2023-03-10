import axios from "axios";
import { USER_POST_ERROR, USER_POST_REQUEST, USER_POST_SUCCESS } from "./userPost.types"



export const getUserPost = (creds) => async (dispatch) => {
    const config = {
        headers: {
            username: creds
        }
    };
    dispatch({ type: USER_POST_REQUEST })
    try {
        const { data } = await axios.get(`https://nem-insta-backend.onrender.com/posts/userPost`, config);
        console.log(data);
        return dispatch({
            type: USER_POST_SUCCESS,
            payload: data,
        });
    }
    catch ({ response: { data: { message } } }) {
        console.log(message);
        return dispatch({
            type: USER_POST_ERROR,
            payload: message,
        });
    }
}
export const getUserPostWithoutReloading = (creds) => async (dispatch) => {
    const config = {
        headers: {
            username: creds
        }
    };
    try {
        const { data } = await axios.get(`https://nem-insta-backend.onrender.com/posts/userPost`, config);
        console.log(data);
        return dispatch({
            type: USER_POST_SUCCESS,
            payload: data,
        });
    }
    catch ({ response: { data: { message } } }) {
        console.log(message);
        return dispatch({
            type: USER_POST_ERROR,
            payload: message,
        });
    }
}