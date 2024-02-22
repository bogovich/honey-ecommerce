import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
      try {
        const response = await fetch('/api/categories');
        const data = await response.json();
        return data;
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