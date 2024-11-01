import { combineReducers } from 'redux';
import { productListReducer } from './product-list/reducer';

export const rootReducer = combineReducers({
    products: productListReducer,
});