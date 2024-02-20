import "./App.css";
import NavBar from "./components/NavBar";
import { useEffect } from "react";
import {
  Landing,
  Cart,
  Contact,
  Products,
  Login,
  Register,
  NotFound,
  Checkout,
  ProductPage,
  AboutArea
} from "./pages";
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
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-our-area" element={<AboutArea />} />
          <Route
            path="/products/:categorySlug/:productSlugAndId"
            element={<ProductPage />}
          />
          <Route path="/products/:categorySlug" element={<Products />} />
          <Route path="/products/" element={<Products />} />
          <Route path="/products/search" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
