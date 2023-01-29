import { useNavigate } from "react-router-dom";
import { LOGIN, LOGOUT } from "./auth.types";

let token = localStorage.getItem("token")
const initState = {
 isAuth:!!token,
 token,
 userId:""
};
export const authReducer = (
  state = initState,
  { type, payload }
) => {
  switch (type) {
    case LOGIN: {
      localStorage.setItem("token",payload.token)

      return {
        ...state,
        isAuth:true,
        token:payload.token,
        userId:payload.userId
      };
    }
    case LOGOUT: {
      localStorage.removeItem("token")
        return {
          ...state,
          isAuth:false,
          token:"",
          userId:""
        };
      }
    
    default: {
      return state;
    }
  }
};