
import { API_BASE_URL } from '../config';



export const FETCH_CHEESE_REQUEST = 'FETCH_CHEESE_REQUEST'
export const fetchCheeseRequest = () => ({
    type: FETCH_CHEESE_REQUEST
});

export const FETCH_CHEESE_ERROR = 'FETCH_CHEESE_ERROR'
export const fetchCheeseError = (error) => ({
    type: FETCH_CHEESE_ERROR,
    error
});

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = cheeses => ({
    type: FETCH_CHEESES_SUCCESS,
    cheeses
})


export const fetchCheeses = () => dispatch => {
    fetch(`${API_BASE_URL}/api/cheeses`).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(cheeses => {
        dispatch(fetchCheesesSuccess(cheeses));
    })
        .catch(err => {
            dispatch(fetchCheeseError(err));
        });
};