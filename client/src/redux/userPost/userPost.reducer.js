import { USER_POST_ERROR, USER_POST_REQUEST, USER_POST_SUCCESS } from "./userPost.types"

const init = {
    loading: false,
    error: false,
    userPost: []
}

export const userPostReducer = (state = init, { type, payload }) => {
    switch (type) {
        case USER_POST_REQUEST: {
            return {
                ...state,
                loading: true,
                error: false,
                userPost: []
            }
        }
        case USER_POST_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
                userPost: []
            }
        }
        case USER_POST_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                userPost: payload.post
            }
        }

        default: {
            return state
        }
    }
}