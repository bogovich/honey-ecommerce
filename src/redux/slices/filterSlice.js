import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    packaging: {},
    honeyType: {},
    category: [],
    price: {
      min: 0,
      max: 100,
    },
  },
  reducers: {
    setPackagingFilter: (state, action) => {
      state.packaging = action.payload;
    },
    setHoneyTypeFilter: (state, action) => {
      state.honeyType = action.payload;
    },
    setCategoryFilter: (state, action) => {
      state.category = action.payload;
    },
    setPriceFilter: (state, action) => {
      state.price = action.payload;
    },
  },
});

export const {
  setPackagingFilter,
  setHoneyTypeFilter,
  setCategoryFilter,
  setPriceFilter,
} = filtersSlice.actions;

export default filtersSlice.reducer;

export const selectFilters = (state) => state.filterReducer;