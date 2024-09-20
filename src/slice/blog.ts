import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        like: 0,
        dislike: 0,
        favorites: [], 
        activeTab: 'all'
    },
    reducers: {
        increment(state: any) {
            state.like++;
        },
        decrement(state: any) {
            state.dislike++;
        },
        addToFavorite(state: any, {payload}: {payload :any}) {
            state.favorites.push(payload);
        },
        changeActiveTab(state: any, {payload}: {payload :any}) {
            state.activeTab = payload;
        }
    }
})

const {actions, reducer} = blogSlice;

export default reducer;
export const {increment, decrement, addToFavorite, changeActiveTab} = actions;