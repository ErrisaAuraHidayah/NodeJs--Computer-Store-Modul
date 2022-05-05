import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Pages/Login";
import Customer from "./Pages/Customer";
import Product from "./Pages/Product";
import Transaction from "./Pages/Transaction";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/customer" element={<Customer />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/Transaction" element={<Transaction />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;