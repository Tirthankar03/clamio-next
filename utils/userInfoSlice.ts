import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userId: '', // Added userId to the initial state
    weight: '',
    height: '',
    age: '',
    name: '',
    allergyHistory: '',
    purpose: '',
    description: ''
};

const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            const { userId, ...userInfo } = action.payload;
            return { ...state, userId, ...userInfo }; // Updated to include userId
        }
    }
});

export const { setUserInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;
