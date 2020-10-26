import CategoryBar from './components/Category';
import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products'
import Footer from './components/Footer';
import BottomFooter from './components/BottomFooter';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <CategoryBar />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/product/:productid' element={<ProductDetails />} />
        <Route path='*' element={() => <h1>404 Product Not Found</h1>} />
      </Routes>
      <Footer />
      <BottomFooter />

    </div>
  );
}

export default App;
