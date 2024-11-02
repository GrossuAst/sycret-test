import { CHANGE_CURRENT_PRODUCT } from "./action";

const initialState = {
    product: null
};

export const currentProductReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_CURRENT_PRODUCT: 
            return {
                ...state,
                product: action.payload
            };
        default:
            return state;
    }
};