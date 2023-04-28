import { createSlice } from '@reduxjs/toolkit';
import operations from 'redux/auth/operations';

const initialState = {
    user: {name:null, email:null},
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
}

export const authSlise = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [operations.signUp.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [operations.logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [operations.logOut.fulfilled](state, _) {
            state.user = {name:null, email:null};
            state.token = null;
            state.isLoggedIn = false;
        },
        [operations.refreshUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
        }
    }
})

export default authSlise.reducer