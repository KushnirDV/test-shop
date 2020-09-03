import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise-middleware';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { countCartProducts } from './middleware/cart.middleware';
import { addChosenProduct } from './middleware/chosenProduct.middleware';

const createHistory = require("history").createBrowserHistory;
export const history = createHistory();


const env = process.env.NODE_ENV;
var middleware;
if (env !== 'production') {
    const logger = createLogger();
    middleware = applyMiddleware(promise, thunk, logger, countCartProducts, addChosenProduct);
}else{
    middleware = applyMiddleware(promise, thunk, countCartProducts, addChosenProduct);
}

const store = createStore(reducers(history), middleware);


export default store;