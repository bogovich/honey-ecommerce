import "./App.css";
import NavBar from "./components/NavBar";
import { Landing, Cart, Contact, Shop, Login, Register } from "./pages";
import { Routes, Route } from "react-router-dom";
function App() {
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
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
