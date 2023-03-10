import axios from "axios";
import { RANDOM_POST_ERROR, RANDOM_POST_REQUEST, RANDOM_POST_SUCCESS } from "./randomPost.types"

export const getRandomPost = () => async (dispatch) =>{
    dispatch({
        type: RANDOM_POST_REQUEST
      });
      try {
        const { data } = await axios.get(`https://nem-insta-backend.onrender.com/posts`);
        console.log(data);
        return dispatch({
          type: RANDOM_POST_SUCCESS,
          payload: data,
        });
      }
      catch ({ response: { data: { message } } }) {
        console.log(message);
        return dispatch({
          type: RANDOM_POST_ERROR,
          payload: message,
        });
    
      }
}
export const getRandomPostWithoutreloading = () => async (dispatch) =>{
      try {
        const { data } = await axios.get(`https://nem-insta-backend.onrender.com/posts`);
        console.log(data);
        return dispatch({
          type: RANDOM_POST_SUCCESS,
          payload: data,
        });
      }
      catch ({ response: { data: { message } } }) {
        console.log(message);
        return dispatch({
          type: RANDOM_POST_ERROR,
          payload: message,
        });
    
      }
}
