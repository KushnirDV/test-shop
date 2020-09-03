import { ADD_CHOOSED_PRODUCT, INCREASE_PRODUCT_AMOUNT, DECREASE_PRODUCT_AMOUNT } from '../actions/action_types';
import pruductStorage from '../api/storage.service';

const initialState = {
    cartList: pruductStorage.get('cartList') || {}, 
    total: pruductStorage.get('total') || 0,
}

const cartData = (state=initialState, action) => {
    const { type, cartList, total } = action;
    switch (type){
        case ADD_CHOOSED_PRODUCT:
        case INCREASE_PRODUCT_AMOUNT:
        case DECREASE_PRODUCT_AMOUNT:
            return { ...state, cartList: {...cartList}, total };
        default:
            return state;
    }
}
export default cartData;