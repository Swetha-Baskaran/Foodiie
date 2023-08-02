import {createSlice} from "@reduxjs/toolkit";

const localCart = localStorage.getItem("cart");

const initialState = {
	cart: localCart ? [...localCart] : [],
	cartItemCount: localCart ? localCart.length : 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			state.cartItemCount++;
			state.cart.push(action.payload);
		},
		deleteAllFromCart: state => {
			state.cartItemCount = 0;
			state.cart = [];
		},
		changeQuantityOfProduct: (state, action) => {
			console.log(action.payload);
			state.cart.map((item, index) => {
				if (item.title === action.payload) {
					state.cart[index].count++;
					state.cartItemCount++;
				}
			});
		},
	},
});

export const {addToCart, changeQuantityOfProduct} = cartSlice.actions;
export default cartSlice.reducer;
