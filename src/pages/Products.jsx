import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/slices/cartSlice";
import { useEffect } from "react";
import {
  selectProductsWCategories,
  selectFilteredProducts,
} from "../redux/selectors";
import {
  setPackagingFilter,
  setHoneyTypeFilter,
  setCategoryFilter,
  setPriceFilter,
} from "../redux/slices/filterSlice";
import { getUniqueValues, slugify } from "../utils";
import { Product, FilterForm, FilterCategoryForm } from "../components";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProductsWCategories);
  const filteredProducts = useSelector(selectFilteredProducts);
  const filters = useSelector((state) => state.filterReducer);
  const categories = useSelector((state) => state.categoryReducer.categories);
  const { categorySlug } = useParams();

  useEffect(() => {
    if (products.length > 0) {
      dispatch(setPackagingFilter(getUniqueValues(products, "packaging")));
      dispatch(setHoneyTypeFilter(getUniqueValues(products, "honey_type")));
      dispatch(
        setCategoryFilter(
          categories.map((category) => ({
            ...category,
            checked: false,
          }))
        )
      );
      dispatch(
        setPriceFilter({
          min: Math.min(...products.map((product) => product.price)),
          max: Math.max(...products.map((product) => product.price)),
        })
      );
    }
  }, [products, categories, dispatch]);

  useEffect(() => {
    if (categorySlug) {
      dispatch(
        setCategoryFilter(
          categories.map((category) => ({
            ...category,
            checked: slugify(category.name.en) === categorySlug,
          }))
        )
      );
    } else {
      dispatch(
        setCategoryFilter(
          categories.map((category) => ({
            ...category,
            checked: false,
          }))
        )
      );
    }

  }, [categorySlug, categories, dispatch]);

  const handlePackagingFilterChange = (newFilter) => {
    dispatch(setPackagingFilter(newFilter));
  };

  const handleHoneyTypeFilterChange = (newFilter) => {
    dispatch(setHoneyTypeFilter(newFilter));
  };

  const handleCategoryFilterChange = (newFilter) => {
    dispatch(setCategoryFilter(newFilter));
  };

  const handleAdd = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <section className="products-section">
      <div className="filters">
        <FilterForm
          filter={filters.packaging}
          setFilter={handlePackagingFilterChange}
          title="Filter by Packaging"
        />
        <FilterForm
          filter={filters.honeyType}
          setFilter={handleHoneyTypeFilterChange}
          title="Filter by Honey Type"
        />
        {!categorySlug && (
          <FilterCategoryForm
            filter={filters.category}
            setFilter={handleCategoryFilterChange}
            title="Filter by Category"
          />
        )}
      </div>
      <div className="products">
        {filteredProducts.map((filteredProduct) => {
          return (
            <Product
              key={filteredProduct.id}
              product={filteredProduct}
              handleAdd={handleAdd}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Products;
