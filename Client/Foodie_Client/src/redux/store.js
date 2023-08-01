import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import cartReducer from "./slice/cartSlice";

const store = configureStore({
	reducer: {
		auth: authReducer,
		cart: cartReducer,
		// Add other reducers here if needed
	},
});

export default store;
