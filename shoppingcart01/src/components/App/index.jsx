import React from "react";
import Header from "../Header";
import ProductsList from "../ProductList/index";
import Receipt from "../Receipt";

const App = () =>
  <div>
    <Header />
    <div>
      <ProductsList />
      <Receipt />
    </div>
  </div>;

export default App