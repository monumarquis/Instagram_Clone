
import axios from "axios";
import Swal from 'sweetalert2';
import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./auth.types";
export const LogIn = (creds) => async (dispatch) => {
  dispatch({
    type: LOGIN_REQUEST
  });

  try {
    const { data } = await axios.post(`http://localhost:8001/users/login`, creds);
    Swal.fire({
      icon: 'success',
      title: data.message
    })

    console.log(data);
    return dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
  }
  catch ({ response: { data: { message } } }) {
    console.log(message);
    Swal.fire({
      icon: 'error',
      title: message
    })
    return dispatch({
      type: LOGIN_ERROR,
      payload: message,
    });

  }
};

export const LogOut = () => ({ type: LOGOUT })