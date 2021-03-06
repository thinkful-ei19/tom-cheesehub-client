
//eslint ignore next line
import {FETCH_CHEESE_REQUEST, FETCH_CHEESES_SUCCESS, FETCH_CHEESE_ERROR} from '../actions/cheese';


const initialState = {
    cheeses: [],
    loading: false,
    error: null
};

const cheeseReducer = (state = initialState, action) => {

    if (action.type === FETCH_CHEESE_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    }
    if (action.type === FETCH_CHEESES_SUCCESS) {
        return Object.assign({}, state, {
            cheeses: action.cheeses,
            loading: false,
            error: null
        });
    }
    if (action.type === FETCH_CHEESE_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false
        });
    }
    return state
}

export default cheeseReducer