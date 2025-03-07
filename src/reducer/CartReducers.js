import {ADD_CART, DELETE_CART} from "../actions/CartsActions";

const initialState = [];

const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CART:
            return [...state, {id: Date.now(), text: action.payload.text, desc: action.payload.desc}];
        case DELETE_CART:
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
}

export default cartReducers;