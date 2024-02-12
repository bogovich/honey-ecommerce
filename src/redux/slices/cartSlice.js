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
            const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id);
            if(itemIndex >= 0) {
                state.cart = state.cart.map((item, index) => {
                    return index === itemIndex ? {...item, quantity: item.quantity + 1} : item;
                })
            } else {
                state.cart = [...state.cart, {
                    ...action.payload,
                    quantity: 1
                }]
            }
            state.total = Math.round(state.cart.reduce((total, item) => total + (item.price * item.quantity), 0) * 100) / 100;
            saveState(state);
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.map((item) => {
                return item.id === action.payload.id ? {...item, quantity: item.quantity - 1} : item
            })
            state.cart = state.cart.filter(item => item.quantity !== 0);
            state.total = Math.round(state.cart.reduce((total, item) => total + (item.price * item.quantity), 0)*100)/100;
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