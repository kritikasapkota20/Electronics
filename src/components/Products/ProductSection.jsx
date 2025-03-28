import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { motion, AnimatePresence } from 'framer-motion';

const ProductSection = ({ title, categories, products, viewAllLink }) => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  
  const filteredProducts = products.filter(product => 
    categories.find(cat => cat.id === activeCategory)?.id === 'all' ? true : product.category === activeCategory
  );
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };
  
  return (
    <section className="py-16" data-aos="fade-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between mb-8">
          <h2 className="section-title" data-aos="fade-right">{title}</h2>
          
          <div className="flex flex-wrap items-center mt-4 md:mt-0 gap-2" data-aos="fade-up">
            {categories.map((category, index) => (
              <button
                key={category.id}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300
                  ${activeCategory === category.id 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-neutral hover:text-primary'}`}
                onClick={() => setActiveCategory(category.id)}
                data-aos="fade-up"
                data-aos-delay={100 + (index * 50)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <Link 
            to={viewAllLink} 
            className="mt-4 md:mt-0 text-primary font-medium hover:underline flex items-center gap-1 transition-all duration-300"
            data-aos="fade-left"
          >
            See All Products
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
            variants={containerVariants}
          >
            {filteredProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-dark">No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection; 