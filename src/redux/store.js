import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import categoryReducer from "./slices/categorySlice";
import cartReducer from "./slices/cartSlice";
import filterReducer from "./slices/filterSlice";


// what would be gained by combining reducers? what's the pros and cons?
const store = configureStore({
  reducer: {
    productReducer,
    categoryReducer,
    cartReducer,
    filterReducer,
  },
});

export default store;