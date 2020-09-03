import { INCREASE_PRODUCT_AMOUNT, DECREASE_PRODUCT_AMOUNT, ADD_CHOOSED_PRODUCT } from "./action_types";

export const increaseProductAmount = data => {
  return {
    type: INCREASE_PRODUCT_AMOUNT,
    payload: data
  };
};
export const decreaseProductAmount = data => {
  return {
    type: DECREASE_PRODUCT_AMOUNT,
    payload: data
  };
};
export const cleanCart = () => {
  return {
    type: ADD_CHOOSED_PRODUCT,
    payload: null
  };
}
export const addChosenProduct = (data) => {
  return dispatch => {
      dispatch({
          type: ADD_CHOOSED_PRODUCT,
          payload: data,
      });
  }
}