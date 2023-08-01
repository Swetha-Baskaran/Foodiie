import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	cart: [],
	cartItemCount: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: state => {
			state.cartItemCount++;
		},
	},
});

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;
