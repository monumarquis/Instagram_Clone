import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./auth.types";

let token = localStorage.getItem("token")
const initState = {
  isAuth: !!token,
  token,
  userId: "",
  username:"",
  loading: false,
  error: false
};
export const authReducer = (
  state = initState,
  { type, payload }
) => {
  switch (type) {
    case LOGIN_SUCCESS: {
      localStorage.setItem("token", payload.token)

      return {
        ...state,
        isAuth: true,
        token: payload.token,
        userId: payload.userId,
        username: payload.username,
        loading: false,
        error: false
      };
    }
    case LOGIN_REQUEST: {

      return {
        ...state,
        isAuth: false,
        token: "",
        userId: "",
        username: "",
        loading: true,
        error: false
      };
    }
    case LOGIN_ERROR: {

      return {
        ...state,
        isAuth: false,
        token: "",
        userId: "",
        username: "",
        loading: false,
        error: true
      };
    }
    case LOGOUT: {
      localStorage.removeItem("token")
      return {
        ...state,
        isAuth: false,
        token: "",
        userId: "",
        username: "",
        loading: false,
        error: false
      };
    }

    default: {
      return state;
    }
  }
};