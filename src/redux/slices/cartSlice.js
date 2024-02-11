import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        status: 'idle',
        error: null,
        total: 0
    },
    reducers: {
        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload];
            state.total = state.cart.reduce((total, item) => total + item.price, 0);
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
            state.total = state.cart.reduce((total, item) => total + item.price, 0);
        },
        clearCart: (state) => {
            state.cart = [];
            state.total = 0;
        }
    }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer