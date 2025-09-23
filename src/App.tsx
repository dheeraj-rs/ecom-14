import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import OurPortfolio from './pages/OurPortfolio';
import PortfolioDetails from './pages/PortfolioDetails';
import FurnitureCatalog from './pages/FurnitureCatalog';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderPage from './pages/OrderPage';
import { CartProvider } from './context/CartContext';
import { OrderProvider } from './context/OrderContext';

function App() {
  return (
    <CartProvider>
      <OrderProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Routes>
              <Route path="/" element={<><Header /><HomePage /></>} />
              <Route path="/portfolio" element={<><Header /><OurPortfolio /></>} />
              <Route path="/portfolio/:id" element={<><Header /><PortfolioDetails /></>} />
              <Route path="/catalog" element={<FurnitureCatalog />} />
              <Route path="/cart" element={<><Header /><CartPage /></>} />
              <Route path="/checkout" element={<><Header /><CheckoutPage /></>} />
              <Route path="/orders" element={<><Header /><OrderPage /></>} />
            </Routes>
          </div>
        </Router>
      </OrderProvider>
    </CartProvider>
  );
}

export default App;