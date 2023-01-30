import { RANDOM_POST_ERROR, RANDOM_POST_REQUEST, RANDOM_POST_SUCCESS } from "./randomPost.types";

const initState = {
    loading: false,
    error: false,
    randomPost: []
}
export const randomPostReducer = (state = initState,{ type, payload }) => {
    switch (type) {
        case RANDOM_POST_REQUEST: {
            return {
                ...state,
                loading: true,
                error: false,
                randomPost: []
            }
        }
        case RANDOM_POST_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
                randomPost: []
            }
        }
        case RANDOM_POST_SUCCESS:{
            return {
                ...state,
                loading: false,
                error: false,
                randomPost: payload.randomPost
            }
        }


        default:{
            return state
        }
            
    }
}
