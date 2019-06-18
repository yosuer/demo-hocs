import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/orders" component={Orders} />
      </BrowserRouter>
    </div>
  );
}

export default App;
