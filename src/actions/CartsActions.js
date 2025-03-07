export const ADD_CART = "ADD_CART";
export const DELETE_CART = "DELETE_CART";

export const addCart = (text, desc) => ({
    type: ADD_CART,
    payload: {text, desc}
});

export const delCart = (id) => ({
    type: DELETE_CART,
    payload: {id}
});