import * as types from "./action_types";
import API from "../api/api.service";

export const getProductsThunk = () => async dispatch => {
    dispatch(
        {type: types.GET_PODACT_DATA, payload:API.getProducts()}
    );
}