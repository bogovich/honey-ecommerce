import "./App.css";
import NavBar from "./components/NavBar";
import { useEffect } from "react";
import { Landing, Cart, Contact, Products, Login, Register } from "./pages";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/slices/productSlice";
import { fetchCategories} from "./redux/slices/categorySlice";
import ProductPage from "./components/ProductPage";
function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchProducts())
  }, [dispatch])
  return (
    <>
      <header className="App-header">
        <NavBar />
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/" element={<Products />} />
          <Route path="/products/:categorySlug" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/:productSlugAndId" element={<ProductPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
