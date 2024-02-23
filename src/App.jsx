import "./App.css";
import NavBar from "./components/NavBar";
import { useEffect, lazy, Suspense } from "react";
import {
  Landing,
  Contact,
  Login,
  Register,
  NotFound,
  AboutArea
} from "./pages";
import Loading from "./components/Loading";
const Checkout = lazy(() => import("./pages/Checkout"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const Products = lazy(() => import("./pages/Products"));
const Cart = lazy(() => import("./pages/Cart"));
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/slices/productSlice";
import { fetchCategories } from "./redux/slices/categorySlice";
import {Breadcrumbs, Footer } from "./components";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      <header className="App-header">
        <NavBar />
      </header>
      <main className="main">
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-our-area" element={<AboutArea />} />
          <Route
            path="/products/:categorySlug/:productSlugAndId"
            element={<LazyProductPage />}
          />
          <Route path="/products/:categorySlug" element={<ProductsPage />} />
          <Route path="/products/" element={<ProductsPage />} />
          <Route path="/products/search" element={<Products />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

const CheckoutPage = () => (
  <Suspense fallback={<Loading />}>
    <Checkout />
  </Suspense>
);

const LazyProductPage = () => (
  <Suspense fallback={<Loading />}>
    <ProductPage />
  </Suspense>
);

const ProductsPage = () => (
  <Suspense fallback={<Loading />}>
    <Products />
  </Suspense>
);

const CartPage = () => (
  <Suspense fallback={<Loading />}>
    <Cart />
  </Suspense>
);
export default App;
