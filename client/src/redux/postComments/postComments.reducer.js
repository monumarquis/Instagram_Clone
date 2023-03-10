import { COMMENT_POST_ERROR, COMMENT_POST_REQUEST, COMMENT_POST_SUCCESS } from "./postComments.types"

const init = {
    loading: false,
    error: false,
    postComment: []
}

export const postCommentReducer = (state = init, { type, payload }) => {
    switch (type) {
        case COMMENT_POST_REQUEST: {
            return {
                ...state,
                loading: true,
                error: false,
                postComment: []
            }
        }
        case COMMENT_POST_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                postComment: payload
            }
        }
        case COMMENT_POST_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
                postComment: []
            }
        }


        default: {
            return state
        }
    }
}