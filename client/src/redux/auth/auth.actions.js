
import axios from "axios";
import { LOGIN_DEFAULT, LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./auth.types";
export const LogIn = (creds) => async (dispatch) => {
  dispatch({
    type: LOGIN_REQUEST
  });

  try {
    const { data } = await axios.post(`https://nem-insta-backend.onrender.com/users/login`, creds);
    console.log(data);
    return dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
  }
  catch ({ response: { data: { message } } }) {
    console.log(message);
    return dispatch({
      type: LOGIN_ERROR,
      payload: message,
    });

  }
};

export const LogOut = () => ({ type: LOGOUT })
export const LogInDefault = () => ({ type: LOGIN_DEFAULT })