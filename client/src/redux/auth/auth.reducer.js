import { LOGIN, LOGOUT } from "./auth.types";

let token = localStorage.getItem("token")
const initState = {
 isAuth:!!token,
 token,
 role:""
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
        role:payload.role
      };
    }
    case LOGOUT: {
      localStorage.removeItem("token")
        return {
          ...state,
          isAuth:false,
          token:"",
          role:""
        };
      }
    
    default: {
      return state;
    }
  }
};