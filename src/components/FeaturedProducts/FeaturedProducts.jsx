import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import './FeaturedProducts.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Redmi 10 Prime Phone',
      price: 199.00,
      oldPrice: 249.00,
      image: '/images/products/phone1.jpg',
      discount: 20,
      rating: 4,
      category: 'phone'
    },
    {
      id: 2,
      name: 'Apple MacBook Pro 13"',
      price: 1299.00,
      oldPrice: null,
      image: '/images/products/laptop1.jpg',
      discount: null,
      rating: 5,
      category: 'laptop'
    },
    {
      id: 3,
      name: 'Meta Quest 3 VR Headset',
      price: 499.00,
      oldPrice: 599.00,
      image: '/images/products/vr1.jpg',
      discount: 17,
      rating: 4,
      category: 'vr'
    },
    {
      id: 4,
      name: 'Apple Watch Series 9',
      price: 399.00,
      oldPrice: null,
      image: '/images/products/watch1.jpg',
      discount: null,
      rating: 5,
      category: 'watch'
    }
  ];

  return (
    <section className="featured-products-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Products</h2>
          <Link to="/featured" className="view-all-link">
            See More Products
          </Link>
        </div>
        
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          className="featured-swiper"
        >
          {featuredProducts.map(product => (
            <SwiperSlide key={product.id}>
              <div className="featured-product-card">
                {product.discount && <span className="discount-badge">-{product.discount}%</span>}
                
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="product-actions">
                    <button className="action-btn wishlist-btn" title="Add to Wishlist">
                      ❤️
                    </button>
                    <button className="action-btn quick-view-btn" title="Quick View">
                      👁️
                    </button>
                    <button className="action-btn add-to-cart-btn" title="Add to Cart">
                      🛒
                    </button>
                  </div>
                </div>
                
                <div className="product-info">
                  <div className="product-rating">
                    {'★'.repeat(product.rating)}
                    {'☆'.repeat(5 - product.rating)}
                    <span className="rating-count">(32)</span>
                  </div>
                  
                  <h3 className="product-name">
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                  </h3>
                  
                  <div className="product-price">
                    <span className="current-price">${product.price.toFixed(2)}</span>
                    {product.oldPrice && (
                      <span className="old-price">${product.oldPrice.toFixed(2)}</span>
                    )}
                  </div>
                  
                  <button className="btn add-to-cart">Add to Cart</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedProducts; 