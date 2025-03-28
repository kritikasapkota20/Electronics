import React from 'react';
import { Link } from 'react-router-dom';
import './DealOfDay.css';

const DealOfDay = ({ deals }) => {
  return (
    <section className="deal-of-day-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Deal Of The Day</h2>
          <Link to="/deals" className="view-all-link">See All Promotions</Link>
        </div>
        
        <div className="deals-grid">
          {deals.map((deal, index) => (
            <div className="deal-card" key={index}>
              <div className="deal-image">
                <img src={deal.image} alt={deal.name} />
                <div className="deal-badge">
                  <span className="badge-text">Deal</span>
                </div>
                {deal.discount && (
                  <div className="deal-discount">
                    <span className="discount-amount">-{deal.discount}%</span>
                  </div>
                )}
              </div>
              
              <div className="deal-content">
                <h3 className="deal-title">
                  <Link to={`/product/${deal.id}`}>{deal.name}</Link>
                </h3>
                
                <div className="deal-price">
                  <span className="current-price">${deal.price.toFixed(2)}</span>
                  {deal.oldPrice && (
                    <span className="old-price">${deal.oldPrice.toFixed(2)}</span>
                  )}
                </div>
                
                <div className="deal-options">
                  {deal.colors && (
                    <div className="color-options">
                      {deal.colors.map((color, i) => (
                        <span 
                          key={i} 
                          className={`color-option ${color.selected ? 'selected' : ''}`}
                          style={{ backgroundColor: color.code }}
                        ></span>
                      ))}
                    </div>
                  )}
                  
                  {deal.sizes && (
                    <div className="size-options">
                      {deal.sizes.map((size, i) => (
                        <span 
                          key={i} 
                          className={`size-option ${size.selected ? 'selected' : ''}`}
                        >
                          {size.value}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="deal-actions">
                  <button className="btn add-to-cart-btn">Add to Cart</button>
                  <button className="btn wishlist-btn">❤️</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealOfDay; 