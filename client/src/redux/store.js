import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose
} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
//   import { cartReducer } from "./cart/cart.reducer";
//   import { productReducer } from "./product/product.reducer";
const rootReducer = combineReducers({
  // product: productReducer,
  auth: authReducer,
  // cart: cartReducer
});

const createCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  rootReducer,
  createCompose(applyMiddleware(thunk))
);
