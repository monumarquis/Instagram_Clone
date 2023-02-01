import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose
} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import { randomPostReducer } from "./randomPost/randomPost.reducer";
import { userPostReducer } from "./userPost/userPost.reducer";
import { userBoiReducer } from "./userBoi/userBoi.reducer";
const rootReducer = combineReducers({
  auth: authReducer,
  randomPost: randomPostReducer,
  userPost: userPostReducer,
  userBoi: userBoiReducer
  // postComment: postCommentReducer
});

const createCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  rootReducer,
  createCompose(applyMiddleware(thunk))
);
