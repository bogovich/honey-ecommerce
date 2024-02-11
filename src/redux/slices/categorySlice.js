import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {collection, query, orderBy, getDocs} from "firebase/firestore";
import {db} from '../../firebase';

const getProductData = async () => {
    const q = query(collection(db, "categories"), orderBy("created_at", "desc"));
    const data = await getDocs(q);
    const categoriesArray = data.docs.map(async (doc) => {
        return {
            id: doc.id,
            data: doc.data()
        }
    });
    return categoriesArray;
}

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
      try {
        const response = await getProductData();
        return response;
      } catch (error) {
        throw Error(error);
      }
    }
  );

const categorySlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.categories = action.payload
        })
        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export default categorySlice.reducer