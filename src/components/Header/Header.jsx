import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full bg-white transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 z-50 shadow-md animate-slide-down' : ''}`}>
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 text-sm">
        <div className="container flex justify-between items-center">
          <p className="text-white/90">Fast & Free shipping for orders above $99</p>
          <div className="flex items-center space-x-4">
            <span className="text-white/90">24/7 customer service</span>
            <span className="text-white/90">EN</span>
            <span className="text-white/90">USD</span>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="container py-4">
        <div className="flex flex-wrap items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-3xl font-bold text-primary">electech</h1>
          </Link>
          
          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="absolute right-0 top-0 h-full bg-primary text-white px-4 rounded-r-md hover:bg-primary-dark transition duration-300">
                Search
              </button>
            </div>
          </div>
          
          {/* Header Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/account" className="flex flex-col items-center text-neutral-dark hover:text-primary transition duration-300">
              <span className="text-xl mb-1">👤</span>
              <span className="text-xs">Account</span>
            </Link>
            <Link to="/wishlist" className="flex flex-col items-center text-neutral-dark hover:text-primary transition duration-300">
              <span className="text-xl mb-1">❤️</span>
              <span className="text-xs">Wishlist</span>
            </Link>
            <Link to="/cart" className="flex flex-col items-center text-neutral-dark hover:text-primary transition duration-300">
              <span className="text-xl mb-1">🛒</span>
              <span className="text-xs">Cart</span>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
        {/* Mobile Search - Only visible on mobile */}
        <div className="md:hidden mt-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button className="absolute right-0 top-0 h-full bg-primary text-white px-4 rounded-r-md hover:bg-primary-dark transition duration-300">
              Search
            </button>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="bg-neutral-lightest border-t border-b border-gray-200">
        <div className="container">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8 py-3">
            <li data-aos="fade-down" data-aos-delay="100">
              <Link to="/shop-by-category" className="text-neutral-dark hover:text-primary font-medium transition duration-300">
                Shop By Category
              </Link>
            </li>
            <li data-aos="fade-down" data-aos-delay="200">
              <Link to="/featured" className="text-neutral-dark hover:text-primary font-medium transition duration-300">
                Featured
              </Link>
            </li>
            <li data-aos="fade-down" data-aos-delay="300">
              <Link to="/products" className="text-neutral-dark hover:text-primary font-medium transition duration-300">
                Products
              </Link>
            </li>
            <li data-aos="fade-down" data-aos-delay="400">
              <Link to="/collections" className="text-neutral-dark hover:text-primary font-medium transition duration-300">
                Collections
              </Link>
            </li>
            <li data-aos="fade-down" data-aos-delay="500">
              <Link to="/deals" className="text-neutral-dark hover:text-primary font-medium transition duration-300">
                Deals
              </Link>
            </li>
            <li data-aos="fade-down" data-aos-delay="600">
              <Link to="/blog" className="text-neutral-dark hover:text-primary font-medium transition duration-300">
                Blog
              </Link>
            </li>
          </ul>
          
          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <ul className="py-3 space-y-4">
                <li>
                  <Link to="/shop-by-category" className="block text-neutral-dark hover:text-primary font-medium py-2 transition duration-300">
                    Shop By Category
                  </Link>
                </li>
                <li>
                  <Link to="/featured" className="block text-neutral-dark hover:text-primary font-medium py-2 transition duration-300">
                    Featured
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="block text-neutral-dark hover:text-primary font-medium py-2 transition duration-300">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/collections" className="block text-neutral-dark hover:text-primary font-medium py-2 transition duration-300">
                    Collections
                  </Link>
                </li>
                <li>
                  <Link to="/deals" className="block text-neutral-dark hover:text-primary font-medium py-2 transition duration-300">
                    Deals
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="block text-neutral-dark hover:text-primary font-medium py-2 transition duration-300">
                    Blog
                  </Link>
                </li>
                <li className="pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-6">
                    <Link to="/account" className="flex flex-col items-center text-neutral-dark hover:text-primary transition duration-300">
                      <span className="text-xl mb-1">👤</span>
                      <span className="text-xs">Account</span>
                    </Link>
                    <Link to="/wishlist" className="flex flex-col items-center text-neutral-dark hover:text-primary transition duration-300">
                      <span className="text-xl mb-1">❤️</span>
                      <span className="text-xs">Wishlist</span>
                    </Link>
                    <Link to="/cart" className="flex flex-col items-center text-neutral-dark hover:text-primary transition duration-300">
                      <span className="text-xl mb-1">🛒</span>
                      <span className="text-xs">Cart</span>
                    </Link>
                  </div>
                </li>
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header; 