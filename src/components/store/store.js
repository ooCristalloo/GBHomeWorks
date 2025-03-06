import {configureStore} from "@reduxjs/toolkit";

const reducer = (theme = "default", action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return theme === "default" ? "night" : "default"
        default:
            return theme;
    }
}

const store = configureStore({
    reducer: reducer
})

export default store;