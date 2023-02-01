import { USER_BOI_ERROR, USER_BOI_REQUEST, USER_BOI_SUCCESS } from "./userBoi.types";

const init = {
    userBoi: {},
    loading: false,
    error: false
}

export const userBoiReducer = (state = init, { type, payload }) => {
    switch (type) {
        case USER_BOI_SUCCESS: {
            return {
                ...state,
                userBoi: payload,
                loading: false,
                error: false
            }
        }
        case USER_BOI_REQUEST: {
            return {
                ...state,
                userBoi: {},
                loading: true,
                error: false
            }
        }
        case USER_BOI_ERROR: {
            return {
                ...state,
                userBoi: {},
                loading: false,
                error: true
            }
        }

        default: {
            return state
        }

    }
}