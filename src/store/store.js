import {configureStore} from "@reduxjs/toolkit";
import CartReducers from "../reducer/CartReducers";

const store = configureStore({
    reducer: {
        carts: CartReducers
    }
})

export default store;