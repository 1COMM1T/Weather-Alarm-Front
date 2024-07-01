import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {};

const mainSlice = createSlice({
    name:'main',
    initialState,
    reducers: {
        setKey(state, action) {
            state.key = action.payload;
        },
        setEmail(state, action) {
            state.email = action.payload;
        }
    }
});

export const { setKey, setEmail } = mainSlice.actions;

const store = configureStore({
    reducer: {
        main: mainSlice.reducer
    }
});

export default store;