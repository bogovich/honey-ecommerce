import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {collection, query, orderBy, getDocs} from "firebase/firestore";
import {db} from '../../firebase';

const getProductData = async () => {
    const q = query(collection(db, "products"), orderBy("created_at", "desc"));
    const data = await getDocs(q);
    const productsArray = await Promise.all(data.docs.map(async (doc) => {
        const docData = doc.data();
        return {
                ...docData,
                id: doc.id,
                created_at: docData.created_at.toDate().toISOString(),
                category: {id: docData.category.id},
        }
    }));
    return productsArray;
}

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
      try {
        const response = await getProductData();
        return response;
      } catch (error) {
        throw Error(error);
      }
    }
  );

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.products = action.payload
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export default productSlice.reducer
export const selectProducts = state => state.productReducer.products;