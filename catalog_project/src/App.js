import React from "react";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import EditProduct from "./components/EditProduct";
import './App.css'

function App() {
  return (
      <div className="product-catalogue">
        <h1 className="title">Product Catalogue</h1>
        <AddProduct />
        <ProductList />
        <EditProduct />

      </div>

  );
}

export default App;