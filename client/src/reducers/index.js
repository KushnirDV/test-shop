import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import { connectRouter } from "connected-react-router";

import productData from './product.reducer';
import cartData from './cart.reducer';

const reducers = history =>
  combineReducers({
    form: formReducer,
    productData,
    cartData,
    router: connectRouter(history)
  });

export default reducers;
