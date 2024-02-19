import { useSelector, useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
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
  setNameFilter,
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
  const [searchParams] = useSearchParams();
  const search = searchParams.get("name");

  useEffect(() => {
    dispatch(setNameFilter(search || ""));
  }, [search, dispatch]);

  const initializeFilters = (products, categories, dispatch) => {
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
  };
  

  useEffect(() => {
    if (products.length > 0) {
      initializeFilters(products, categories, dispatch);
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const clearFilters = () => {
    initializeFilters(products, categories, dispatch);
  };

  const handlePackagingFilterChange = (newFilter) => {
    dispatch(setPackagingFilter(newFilter));
  };

  const handleHoneyTypeFilterChange = (newFilter) => {
    dispatch(setHoneyTypeFilter(newFilter));
  };

  const handleCategoryFilterChange = (newFilter) => {
    dispatch(setCategoryFilter(newFilter));
  };

  return (
    <section className="products-section">
      <div className="filters">
        <h1>Filters</h1>
        <button onClick={clearFilters} className="btn-secondary filters__btn-clear">
          Clear Filters
        </button>
        <FilterForm
          filter={filters.packaging}
          setFilter={handlePackagingFilterChange}
          title="Packaging"
        />
        <FilterForm
          filter={filters.honeyType}
          setFilter={handleHoneyTypeFilterChange}
          title="Honey Type"
        />
        {!categorySlug && (
          <FilterCategoryForm
            filter={filters.category}
            setFilter={handleCategoryFilterChange}
            title="Category"
          />
        )}
      </div>

      <div className="products">
        {filteredProducts.map((filteredProduct) => {
          return (
            <Product
              key={filteredProduct.id}
              product={filteredProduct}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Products;
