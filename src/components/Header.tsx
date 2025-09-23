import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, User, Search, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { cartItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
        : 'bg-gradient-to-r from-black/30 via-purple-900/20 to-black/30 backdrop-blur-md'
    }`}>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg shadow-purple-500/25">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <Sparkles className="relative w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              LuxeFurn
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link 
              to="/" 
              className={`relative font-medium transition-all duration-300 group ${
                location.pathname === '/' 
                  ? 'text-cyan-400' 
                  : 'text-white/90 hover:text-cyan-300'
              }`}
            >
              <span className="relative z-10">Home</span>
              {location.pathname === '/' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
              )}
            </Link>
            <Link 
              to="/portfolio" 
              className={`relative font-medium transition-all duration-300 group ${
                location.pathname.startsWith('/portfolio') 
                  ? 'text-cyan-400' 
                  : 'text-white/90 hover:text-cyan-300'
              }`}
            >
              <span className="relative z-10">Portfolio</span>
              {location.pathname.startsWith('/portfolio') && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
              )}
            </Link>
            <Link 
              to="/catalog" 
              className={`relative font-medium transition-all duration-300 group ${
                location.pathname === '/catalog' 
                  ? 'text-cyan-400' 
                  : 'text-white/90 hover:text-cyan-300'
              }`}
            >
              <span className="relative z-10">Catalog</span>
              {location.pathname === '/catalog' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
              )}
            </Link>
            <Link 
              to="/orders" 
              className={`relative font-medium transition-all duration-300 group ${
                location.pathname === '/orders' 
                  ? 'text-cyan-400' 
                  : 'text-white/90 hover:text-cyan-300'
              }`}
            >
              <span className="relative z-10">Orders</span>
              {location.pathname === '/orders' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
              )}
            </Link>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button className="p-2 text-white/80 hover:text-cyan-300 transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-lg backdrop-blur-sm">
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <Link to="/cart" className="relative p-2 text-white/80 hover:text-cyan-300 transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-lg backdrop-blur-sm group">
              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center animate-pulse shadow-lg">
                  {cartItemsCount}
                </span>
              )}
            </Link>
            <button className="p-2 text-white/80 hover:text-cyan-300 transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-lg backdrop-blur-sm">
              <User className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white/80 hover:text-cyan-300 transition-all duration-300 hover:bg-white/10 rounded-lg backdrop-blur-sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/40 backdrop-blur-xl border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            <Link 
              to="/" 
              className={`block font-medium transition-all duration-300 py-2 px-3 rounded-lg ${
                location.pathname === '/' 
                  ? 'text-cyan-400 bg-white/10' 
                  : 'text-white/90 hover:text-cyan-300 hover:bg-white/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/portfolio" 
              className={`block font-medium transition-all duration-300 py-2 px-3 rounded-lg ${
                location.pathname.startsWith('/portfolio') 
                  ? 'text-cyan-400 bg-white/10' 
                  : 'text-white/90 hover:text-cyan-300 hover:bg-white/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              to="/catalog" 
              className={`block font-medium transition-all duration-300 py-2 px-3 rounded-lg ${
                location.pathname === '/catalog' 
                  ? 'text-cyan-400 bg-white/10' 
                  : 'text-white/90 hover:text-cyan-300 hover:bg-white/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Catalog
            </Link>
            <Link 
              to="/orders" 
              className={`block font-medium transition-all duration-300 py-2 px-3 rounded-lg ${
                location.pathname === '/orders' 
                  ? 'text-cyan-400 bg-white/10' 
                  : 'text-white/90 hover:text-cyan-300 hover:bg-white/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Orders
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;