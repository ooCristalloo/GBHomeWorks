import { configureStore } from "@reduxjs/toolkit";
import CartReducers from "../reducer/CartReducers";
import fetchTasks from "../reducer/fetchTasks";

const store = configureStore({
    reducer: {
        tasks: fetchTasks,
        carts: CartReducers,
    }
});

export default store;