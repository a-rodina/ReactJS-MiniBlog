import { configureStore } from "@reduxjs/toolkit";
import blogReducer from '../slice/blog';

const rootReducer = {
    blog: blogReducer,
}

const store = configureStore({
    reducer: rootReducer
})

export default store 