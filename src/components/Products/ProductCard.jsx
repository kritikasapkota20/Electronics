import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductCard = ({ product, index }) => {
  const { id, name, price, oldPrice, image, discount, rating, isNew } = product;
  
  // Use Lorem Picsum if no image is provided
  const productImage = image || `https://picsum.photos/seed/product${id}/300/300`;
  
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: index ? index * 0.1 : 0 
      }
    }
  };
  
  return (
    <motion.div 
      className="card overflow-hidden group"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      data-aos="fade-up"
      data-aos-delay={index ? index * 50 : 0}
    >
      {/* Product badges */}
      <div className="relative">
        {discount && (
          <span className="absolute top-2 left-2 z-10 bg-secondary text-white text-xs font-bold px-2 py-1 rounded-md">
            -{discount}%
          </span>
        )}
        {isNew && (
          <span className="absolute top-2 right-2 z-10 bg-primary text-white text-xs font-bold px-2 py-1 rounded-md">
            NEW
          </span>
        )}
      </div>
      
      {/* Product image */}
      <div className="relative aspect-square overflow-hidden bg-neutral-lightest p-4">
        <img 
          src={productImage} 
          alt={name}
          className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110" 
        />
        
        {/* Hover Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-neutral hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300">
            ❤️
          </button>
          <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-neutral hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300">
            👁️
          </button>
          <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-neutral hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300">
            🛒
          </button>
        </div>
      </div>
      
      {/* Product info */}
      <div className="p-4">
        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="text-yellow-400 flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>
                {i < rating ? '★' : '☆'}
              </span>
            ))}
          </div>
          <span className="text-xs text-neutral ml-1">(45)</span>
        </div>
        
        {/* Product name */}
        <h3 className="text-sm font-medium text-neutral-dark mb-2 h-10 overflow-hidden">
          <Link to={`/product/${id}`} className="hover:text-primary transition-colors duration-300">
            {name}
          </Link>
        </h3>
        
        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-bold text-primary">${price.toFixed(2)}</span>
          {oldPrice && (
            <span className="text-sm line-through text-neutral">${oldPrice.toFixed(2)}</span>
          )}
        </div>
        
        {/* Add to cart button */}
        <button className="btn w-full py-2">Add to Cart</button>
      </div>
    </motion.div>
  );
};

export default ProductCard; 