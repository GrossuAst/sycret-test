import { combineReducers } from 'redux';
import { productListReducer } from './product-list/reducer';
import { currentProductReducer } from './current-product/reducer';

export const rootReducer = combineReducers({
    products: productListReducer,
    currentProduct: currentProductReducer,
});