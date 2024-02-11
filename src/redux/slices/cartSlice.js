import { createSlice } from '@reduxjs/toolkit';

const saveState = (state) => {
    try {
        const localState = JSON.stringify(state);
        localStorage.setItem('cart', localState);
    } catch (error) {
        console.log(error);
    }
}

const initialState = {
    cart: [],
    status: 'idle',
    error: null,
    total: 0
}

const loadState = () => {
    try {
        const localState = localStorage.getItem('cart');
        if (localState === null) return initialState;
        return JSON.parse(localState);
    } catch (error) {
        console.log(error);
        return initialState;
    }
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: loadState(),
    reducers: {
        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload];
            state.total = state.cart.reduce((total, item) => total + item.price, 0);
            saveState(state);
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
            state.total = state.cart.reduce((total, item) => total + item.price, 0);
            saveState(state);
        },
        clearCart: (state) => {
            state.cart = [];
            state.total = 0;
            saveState(state);
        }
    }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer