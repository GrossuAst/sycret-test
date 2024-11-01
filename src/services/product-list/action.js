import { getData } from "../../utils/api";

export const GET_INITIAL_DATA = 'GET_INITIAL_DATA';
export const GET_INITIAL_DATA_FAILED = 'GET_INITIAL_DATA_FAILED';
export const GET_INITIAL_DATA_SUCCESS = 'GET_INITIAL_DATA_SUCCESS';

export function getInitialData() {
    return function(dispatch) {
        dispatch({
            type: GET_INITIAL_DATA
        })
        getData()
            .then(res => {
                if(res.resultdescription === 'OK') {
                    dispatch({
                        type: GET_INITIAL_DATA_SUCCESS,
                        payload: res.data
                    })
                } else {
                    dispatch({
                        type: GET_INITIAL_DATA_FAILED
                    })
                }
            })
            .catch(() => {
                dispatch({type: GET_INITIAL_DATA_FAILED})
            })
    }
}