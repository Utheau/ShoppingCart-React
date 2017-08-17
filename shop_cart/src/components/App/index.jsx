import React, { Component } from 'react';
import Header from '../Header';
import ProductsList from '../ProductList/index';
import Receipt from '../Receipt';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div >
          <ProductsList />
          <Receipt />
        </div>
      </div>
    );
  }
}
export default App;
