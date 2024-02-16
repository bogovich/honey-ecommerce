import { createSlice } from '@reduxjs/toolkit';
import { roundToTwoDecimals } from "../../utils";
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
            const addedQuantity = action.payload.amount || 1;
            if(itemIndex >= 0) {
                state.cart = state.cart.map((item, index) => {
                    return index === itemIndex ? {...item, quantity: item.quantity + addedQuantity} : item;
                })
            } else {
                state.cart = [...state.cart, {
                    ...action.payload,
                    quantity: addedQuantity
                }]
            }
            state.total = roundToTwoDecimals(state.cart.reduce((total, item) => total + (item.price * item.quantity), 0));
            saveState(state);
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
            state.total = roundToTwoDecimals(state.cart.reduce((total, item) => total + (item.price * item.quantity), 0));

            saveState(state);
        },
        updateQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                return item.id === action.payload.id ? {...item, quantity: action.payload.quantity} : item
            })
            state.total = roundToTwoDecimals(state.cart.reduce((total, item) => total + (item.price * item.quantity), 0));
            saveState(state);
        },
        clearCart: (state) => {
            state.cart = [];
            state.total = 0;
            saveState(state);
        }
    }
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions

export default cartSlice.reducer