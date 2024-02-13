import { createSelector } from '@reduxjs/toolkit';
import { selectProducts } from './slices/productSlice';
import { selectCategories } from './slices/categorySlice';

export const selectProductsWCategories = createSelector(
    [selectProducts, selectCategories],
    (products, categories) => products.map(product => ({
        ...product,
        category: categories.find(category => category.id === product.category.id)
    }))
);

export const selectFeaturedProducts = createSelector(
    [selectProductsWCategories],
    (products) => products.filter(product => product.featured)
);