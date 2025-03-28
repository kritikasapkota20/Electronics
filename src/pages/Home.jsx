import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Categories from '../components/Categories/Categories';
import ProductSection from '../components/Products/ProductSection';
import Banner from '../components/Banner/Banner';
import DealOfDay from '../components/DealOfDay/DealOfDay';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import Testimonials from '../components/Testimonials/Testimonials';
import Footer from '../components/Footer/Footer';

// Sample data
const popularProducts = [
  {
    id: 1,
    name: 'AirPods Pro 2nd Generation',
    price: 249.99,
    oldPrice: null,
    image: '/images/products/airpods.png',
    discount: null,
    rating: 5,
    category: 'all'
  },
  {
    id: 2,
    name: 'Sony WH-1000XM5 Wireless Headphones',
    price: 349.99,
    oldPrice: 399.99,
    image: '/images/products/sony-headphones.png',
    discount: 13,
    rating: 4,
    category: 'all'
  },
  {
    id: 3,
    name: 'Apple Magic Mouse 2',
    price: 79.99,
    oldPrice: null,
    image: '/images/products/magic-mouse.png',
    discount: null,
    rating: 4,
    category: 'all'
  },
  {
    id: 4,
    name: 'Apple Watch Ultra 2',
    price: 799.99,
    oldPrice: null,
    image: '/images/products/watch-ultra.png',
    discount: null,
    rating: 5,
    category: 'all'
  },
  {
    id: 5,
    name: 'Logitech MX Master 3S Mouse',
    price: 99.99,
    oldPrice: 119.99,
    image: '/images/products/logitech-mouse.png',
    discount: 17,
    rating: 5,
    category: 'all'
  }
];

const productCategories = [
  { id: 'all', name: 'All Products' },
  { id: 'featured', name: 'Featured' },
  { id: 'newest', name: 'Newest' },
  { id: 'bestselling', name: 'Best Selling' },
];

const banners = [
  {
    title: 'Noise-Cancelling Headphones',
    subtitle: 'Music the way it should be heard',
    text: 'Starting at $199.99',
    link: '/category/headphones',
    image: '/images/banners/headphones.png',
    bgColor: '#f2eaf6',
    size: 'large'
  },
  {
    title: 'iPad Pro M3 Chip',
    subtitle: 'Supercharged by Apple Silicon',
    text: 'Now available',
    link: '/product/ipad-pro-m3',
    image: '/images/banners/ipad.png',
    bgColor: '#e8f4ff',
    discount: 15
  },
  {
    title: 'PlayStation 5 DualSense',
    subtitle: 'Wireless Controller',
    text: 'Elevate your gaming',
    link: '/category/gaming',
    image: '/images/banners/dualsense.png',
    bgColor: '#e8f6ea'
  }
];

const dealOfDayProducts = [
  {
    id: 101,
    name: 'Apple MacBook Pro 16" M3 Pro Chip',
    price: 2499.99,
    oldPrice: 2699.99,
    image: '/images/products/macbook.png',
    discount: 7,
    colors: [
      { code: '#999', selected: false },
      { code: '#333', selected: true }
    ]
  },
  {
    id: 102,
    name: 'Samsung Galaxy S24 Ultra 512GB',
    price: 1199.99,
    oldPrice: 1399.99,
    image: '/images/products/s24-ultra.png',
    discount: 14,
    colors: [
      { code: '#222', selected: true },
      { code: '#738791', selected: false },
      { code: '#95664D', selected: false }
    ]
  }
];

const Home = () => {
  return (
    <div>
      <Header />
      
      <main>
        <Hero />
        
        <Categories />
        
        <ProductSection 
          title="Popular Products" 
          categories={productCategories} 
          products={popularProducts}
          viewAllLink="/products"
        />
        
        <Banner banners={banners} />
        
        <DealOfDay deals={dealOfDayProducts} />
        
        <FeaturedProducts />
        
        <Testimonials />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;