import { createSelector } from '@reduxjs/toolkit';
import { selectProducts } from './slices/productSlice';
import { selectCategories } from './slices/categorySlice';
import { selectFilters } from './slices/filterSlice';
import { slugify } from '../utils';


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

export const selectFilteredProducts = createSelector(
    [selectProducts, selectFilters],
    (products, filters) => {
      return products.filter((product) => {
        const packagingValues = Object.keys(filters.packaging).filter(
          (key) => filters.packaging[key]
        );
        const honeyTypeValues = Object.keys(filters.honeyType).filter(
          (key) => filters.honeyType[key]
        );
        const categoryValues = filters.category
          .filter((category) => category.checked)
          .map((category) => category.id);
  
        const isPackagingMatch =
          packagingValues.length === 0 ||
          packagingValues.includes(product.packaging.en);
        const isPriceMatch =
          product.price >= filters.price.min &&
          product.price <= filters.price.max;
        const isHoneyTypeMatch =
          honeyTypeValues.length === 0 ||
          honeyTypeValues.includes(product.honey_type && product.honey_type.en);
        const isCategoryMatch =
          filters.categorySlug !== undefined
            ? slugify(product.category.name.en) === filters.categorySlug
            : categoryValues.length === 0 ||
              categoryValues.includes(product.category.id);
        return (
          isPackagingMatch &&
          isPriceMatch &&
          isHoneyTypeMatch &&
          isCategoryMatch
        );
      });
    }
  );