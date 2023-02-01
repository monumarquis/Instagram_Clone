import { LOGIN_DEFAULT, LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./auth.types";

let token = localStorage.getItem("token")
const initState = {
  isAuth: !!token,
  token,
  userId: localStorage.getItem("userId"),
  username: localStorage.getItem("username"),
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
      localStorage.setItem("userId", payload.userId)
      localStorage.setItem("username", payload.username)

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
    case LOGIN_DEFAULT: {

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
        error: true,
        errorMessage: payload
      };
    }
    case LOGOUT: {
      localStorage.removeItem("token")
      localStorage.removeItem("userId")
      localStorage.removeItem("username")
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