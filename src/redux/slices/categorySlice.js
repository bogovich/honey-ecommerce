import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDocs, query } from 'firebase/firestore/lite';
import {db} from '../../firebase';

const getCategoryData = async () => {
    const q = query(collection(db, "categories"));
    const data = await getDocs(q);
    const categoriesArray = await Promise.all(data.docs.map(async (doc) => {
        return {
            id: doc.id,
            ...doc.data()
        }
    }));
    return categoriesArray;
}

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
      try {
        const response = await getCategoryData();
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
export const selectCategories = (state) => state.categoryReducer.categories;