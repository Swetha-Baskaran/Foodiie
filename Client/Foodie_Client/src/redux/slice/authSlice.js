import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	user: null,
	isLoggedIn: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
			state.isLoggedIn = !!action.payload;
		},
		logoutUser: state => {
			state.user = null;
			state.isLoggedIn = false;
		},
	},
});

export const {setUser, logoutUser} = authSlice.actions;
export default authSlice.reducer;
