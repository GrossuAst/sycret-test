export const CHANGE_CURRENT_PRODUCT = 'CHANGE_CURRENT_PRODUCT';

export function getCurrentProduct(product) {
    return function(dispatch) {
        dispatch({
            type: CHANGE_CURRENT_PRODUCT,
            payload: product
        })
    }
};