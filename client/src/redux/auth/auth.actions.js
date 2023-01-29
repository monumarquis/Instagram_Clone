
import axios from "axios";
import Swal from 'sweetalert2';
import { LOGIN, LOGOUT } from "./auth.types";
export const LogIn = (creds) => async (dispatch) => {
  try{
    const { data } = await axios.post(`http://localhost:8001/users/login`,creds);
    Swal.fire({
      icon: 'success',
      title:data.message
    })
    
    console.log(data);
    return dispatch({
      type: LOGIN,
      payload: data,
    });
  }
  catch({response:{data:{message}}}){
    console.log(message);
    Swal.fire({
      icon: 'error',
      title:message
    })
  }
};

export const LogOut = () => ({ type: LOGOUT})