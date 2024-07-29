import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Details";
import Error from "./pages/ErrorPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/product/:id" element={<Product></Product>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;