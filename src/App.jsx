import "./App.css";
import NavBar from "./components/NavBar";
import Landing from "./pages/Landing";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <header className="App-header">
        <NavBar />
      </header>
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={<Landing />}
          />
          <Route
            path="/cart"
            element={<Cart />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/shop"
            element={<Shop />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
