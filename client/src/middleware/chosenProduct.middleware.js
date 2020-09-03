import { ADD_CHOOSED_PRODUCT } from "../actions/action_types";
import pruductStorage from "../api/storage.service";

export const addChosenProduct = store => next => action => {
    const {type, payload} = action;
    if(type === ADD_CHOOSED_PRODUCT){
        if(!payload){
            pruductStorage.destroy('cartList');
            pruductStorage.destroy('total');
            action = { ...action, cartList:{}, total:0 };
        }else{
            const {id, price} = payload;
            const { cartData } = store.getState();
            let { cartList, total } = cartData;
            if(!cartList[id]){
                cartList[id] = payload;
                total += price;
            }
            total = Number((total).toFixed(2));

            pruductStorage.set('cartList', cartList);
            pruductStorage.set('total', total);
            
            cartData.cartList = cartList;
            action = { ...action, cartList, total };
        }
    }
    next(action);
}