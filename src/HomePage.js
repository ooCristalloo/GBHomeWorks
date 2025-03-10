import * as React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FormCart from "./components/FormCart";
import CartList from "./CartList";
import store from "./store/store";
import {Provider} from "react-redux";
import TodoList from "./TodoList";

export default function HomePage() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<FormCart/>}/>
                    <Route path="/products" element={<CartList/>}/>
                    <Route path="/todo" element={<TodoList/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}