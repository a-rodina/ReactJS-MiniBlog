import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TData } from "../types/types";

export const getPosts = createAsyncThunk(
    "blog/getPosts", 
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch('https://studapi.teachmeskills.by/blog/posts/?limit=11');
            if(!response.ok) {
                throw new Error("Не удалось загрузить данные")
            }
            const data = await response.json();
            return data;
        }
        catch (error) {
            return rejectWithValue((error as Error).message)
        }
    }
)

export const getOnePost = createAsyncThunk(
    "blog/getOnePost", 
    async function (postTd: string | undefined, {rejectWithValue}) {
        try {
            const response = await fetch(`https://studapi.teachmeskills.by/blog/posts/${postTd}/`);
            if(!response.ok) {
                throw new Error("Не удалось загрузить данные")
            }
            const data = await response.json();
            return data;
        }
        catch (error) {
            return rejectWithValue((error as Error).message)
        }
    }
)

export const searchPost = createAsyncThunk(
    "blog/searchPost", 
    async function (search: any, {rejectWithValue}) {
        try {
            const response = await fetch(`https://studapi.teachmeskills.by/blog/posts/?limit=11&search=${search}/`);
            if(!response.ok) {
                throw new Error("Не удалось загрузить данные")
            }
            const data = await response.json();
            return data;
        }
        catch (error) {
            return rejectWithValue((error as Error).message)
        }
    }
)

const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        like: 0,
        dislike: 0,
        favorites: [], 
        activeTab: 'all',
        posts: [],
        error: null,
        status: null, 
        post: null, 
        search: []
    },
    reducers: {
        increment(state: any) {
            state.like++;
        },
        decrement(state: any) {
            state.dislike++;
        },
        addToFavorite(state: any, {payload}: {payload :any}) {
            if (!state.favorites.find((item: TData) => item.id === payload.id)) {
                state.favorites.push(payload);
            }
        },
        changeActiveTab(state: any, {payload}: {payload :any}) {
            state.activeTab = payload;
        }
    },
    extraReducers: (builder) => {
        return builder.addCase(getPosts.pending, (state: any) => {
            state.status = 'loading';
            state.error = null;
        }), 
        builder.addCase(getPosts.fulfilled, (state: any, {payload}: {payload :any}) => {
            state.status = 'resolved';
            state.error = null;
            state.posts = payload.results;
        }), 
        builder.addCase(getPosts.rejected, (state: any, {payload}: {payload :any}) => {
            state.status = 'rejected';
            state.error = payload;
        }),
        builder.addCase(getOnePost.pending, (state: any) => {
            state.status = 'loading';
            state.error = null;
        }), 
        builder.addCase(getOnePost.fulfilled, (state: any, {payload}: {payload :any}) => {
            state.status = 'resolved';
            state.error = null;
            state.post = payload;
        }), 
        builder.addCase(getOnePost.rejected, (state: any, {payload}: {payload :any}) => {
            state.status = 'rejected';
            state.error = payload;
        }), 
        builder.addCase(searchPost.pending, (state: any) => {
            state.status = 'loading';
            state.error = null;
        }), 
        builder.addCase(searchPost.fulfilled, (state: any, {payload}: {payload :any}) => {
            state.status = 'resolved';
            state.error = null;
            state.search = payload;
        }), 
        builder.addCase(searchPost.rejected, (state: any, {payload}: {payload :any}) => {
            state.status = 'rejected';
            state.error = payload;
        })
    }
})

const {actions, reducer} = blogSlice;

export default reducer;
export const {increment, decrement, addToFavorite, changeActiveTab} = actions;