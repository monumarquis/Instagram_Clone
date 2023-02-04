import { SUGGESTION_USER_ERROR, SUGGESTION_USER_REQUEST, SUGGESTION_USER_SUCCESS } from "./suggestionUser.types"

const init = {
    error: false,
    loading: true,
    suggestionUser: []
}

export const suggestionUserReducer = (state = init, { type, payload }) => {
    switch (type) {
        case SUGGESTION_USER_REQUEST: {
            return {
                ...state,
                loading: true,
                error: false,
                suggestionUser: []
            }
        }
        case SUGGESTION_USER_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                suggestionUser: payload
            }
        }
        case SUGGESTION_USER_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
                suggestionUser: []
            }
        }


        default: {
            return state
        }
    }
}