import * as types from '../actions/action_types';

const initialState = {
    data: [], 
    fetching: false,
    fetched: false,
    error: null
}

const productData = (state=initialState,action) => {
    switch (action.type){
        case types.GET_PODACT_DATA_PENDING:
            return { ...state, fetching: true};
        case types.GET_PODACT_DATA_REJECTED:
            return { ...state, fetching: false, error:action.payload } 
        case types.GET_PODACT_DATA_FULFILLED:
            return { ...state, fetching: false, fetched: true, data: action.payload };
        default:
            return state
    }
}
export default productData;