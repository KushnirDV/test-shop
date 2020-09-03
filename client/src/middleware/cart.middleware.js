import { INCREASE_PRODUCT_AMOUNT, DECREASE_PRODUCT_AMOUNT } from "../actions/action_types";
import pruductStorage from "../api/storage.service";

export const countCartProducts = store => next => action => {
    const {type, payload: id} = action;
    if(type === INCREASE_PRODUCT_AMOUNT || type === DECREASE_PRODUCT_AMOUNT){
        const { cartData } = store.getState();
        let { cartList, total } = cartData;
        let { amount, price } = cartList[id];
        if(type === INCREASE_PRODUCT_AMOUNT){
            amount++
            total = total + price;
            cartList[id].amount = amount;
        }else if(amount > 1){
            amount--
            total = total - price;
            cartList[id].amount = amount;
        }else if(amount === 1){
            delete cartList[id];
            total = total - price;
        }
        total = Number((total).toFixed(2));

        pruductStorage.set('cartList', cartList);
        pruductStorage.set('total', total);

        action = { ...action, cartList, total };
    }
    next(action);
}