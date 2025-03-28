import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-brands">
            <div className="brand-logo">
              <img src="/images/brands/canon.png" alt="Canon" />
            </div>
            <div className="brand-logo">
              <img src="/images/brands/sony.png" alt="Sony" />
            </div>
            <div className="brand-logo">
              <img src="/images/brands/microsoft.png" alt="Microsoft" />
            </div>
            <div className="brand-logo">
              <img src="/images/brands/panasonic.png" alt="Panasonic" />
            </div>
            <div className="brand-logo">
              <img src="/images/brands/samsung.png" alt="Samsung" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="newsletter-section">
        <div className="container">
          <div className="newsletter-container">
            <div className="newsletter-content">
              <h3>Sign Up & Subscribe To Our Newsletter</h3>
              <p>Get the latest updates on new products and upcoming sales</p>
            </div>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <button type="submit" className="btn subscribe-btn">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="footer-main">
        <div className="container">
          <div className="footer-widgets">
            <div className="footer-widget about-widget">
              <h4 className="widget-title">Our Information</h4>
              <p>We're a leading online electronics retailer providing the best products at great prices.</p>
              <div className="contact-info">
                <p><strong>Address:</strong> 123 Tech Street, Silicon Valley, CA</p>
                <p><strong>Phone:</strong> +1 (800) 123-4567</p>
                <p><strong>Email:</strong> support@electech.com</p>
              </div>
              <div className="social-links">
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">YouTube</a>
              </div>
            </div>
            
            <div className="footer-widget">
              <h4 className="widget-title">Products</h4>
              <ul className="widget-links">
                <li><Link to="/category/smartphones">Smartphones</Link></li>
                <li><Link to="/category/laptops">Laptops</Link></li>
                <li><Link to="/category/headphones">Headphones</Link></li>
                <li><Link to="/category/tablets">Tablets</Link></li>
                <li><Link to="/category/smartwatches">Smart Watches</Link></li>
                <li><Link to="/category/accessories">Accessories</Link></li>
              </ul>
            </div>
            
            <div className="footer-widget">
              <h4 className="widget-title">Our Company</h4>
              <ul className="widget-links">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/career">Careers</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/blog">Our Blog</Link></li>
                <li><Link to="/stores">Store Locator</Link></li>
                <li><Link to="/sustainability">Sustainability</Link></li>
              </ul>
            </div>
            
            <div className="footer-widget">
              <h4 className="widget-title">Your Account</h4>
              <ul className="widget-links">
                <li><Link to="/account/profile">Your Profile</Link></li>
                <li><Link to="/account/orders">Your Orders</Link></li>
                <li><Link to="/account/wishlist">Your Wishlist</Link></li>
                <li><Link to="/account/returns">Returns & Exchanges</Link></li>
                <li><Link to="/account/addresses">Shipping Addresses</Link></li>
                <li><Link to="/account/payment-methods">Payment Methods</Link></li>
              </ul>
            </div>
            
            <div className="footer-widget">
              <h4 className="widget-title">Contact Us</h4>
              <ul className="widget-links">
                <li><Link to="/contact/customer-service">Customer Service</Link></li>
                <li><Link to="/contact/tech-support">Technical Support</Link></li>
                <li><Link to="/contact/order-status">Order Status</Link></li>
                <li><Link to="/contact/returns">Returns & Refunds</Link></li>
                <li><Link to="/contact/feedback">Feedback</Link></li>
                <li><Link to="/faq">FAQs</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-info">
            <p className="copyright">© 2023 Electech - Leading Electronics Retailer. All rights reserved.</p>
            <div className="footer-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-conditions">Terms of Service</Link>
              <Link to="/shipping-policy">Shipping Policy</Link>
              <Link to="/refund-policy">Refund Policy</Link>
            </div>
            <div className="payment-methods">
              <img src="/images/payment/visa.png" alt="Visa" />
              <img src="/images/payment/mastercard.png" alt="Mastercard" />
              <img src="/images/payment/amex.png" alt="American Express" />
              <img src="/images/payment/paypal.png" alt="PayPal" />
              <img src="/images/payment/discover.png" alt="Discover" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 