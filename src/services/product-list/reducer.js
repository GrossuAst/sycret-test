import { GET_INITIAL_DATA, GET_INITIAL_DATA_SUCCESS, GET_INITIAL_DATA_FAILED } from "./action";

const initialState = {
    feedRequest: false,
    feedFailed: false,
    data: [],
};

export const productListReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_INITIAL_DATA: 
            return {
                ...state,
                feedRequest: true,
                feedFailed: false
            };
        case GET_INITIAL_DATA_SUCCESS: 
            return {
                ...state,
                data: action.payload,
                feedRequest: false,
                feedFailed: false
            };
        case GET_INITIAL_DATA_FAILED: 
            return {
                ...state,
                feedFailed: true,
                feedRequest: false
            };
        default:
            return state;
    }
};