import axios from "axios"
import { COMMENT_POST_ERROR, COMMENT_POST_REQUEST, COMMENT_POST_SUCCESS } from "./postComments.types"



export const getPostComment = (creds) => async (dispatch) => {
    const config = {
        headers: {
            postid: creds
        }
    }
    dispatch({ type: COMMENT_POST_REQUEST })
    try {
        let { data } = await axios.get("https://nem-insta-backend.onrender.com/comments", config)
        return dispatch({ type: COMMENT_POST_SUCCESS, payload: data })
    }
    catch (err) {
        console.log(err)
        return dispatch({ type: COMMENT_POST_ERROR })
    }
}