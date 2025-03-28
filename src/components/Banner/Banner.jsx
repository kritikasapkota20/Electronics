import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Banner = ({ banners }) => {
  return (
    <section className="py-16" data-aos="fade-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {banners.map((banner, index) => {
            // Use Lorem Picsum for images
            const bannerImage = banner.image || `https://picsum.photos/seed/${banner.title.replace(/\s+/g, '')}/400/400`;
            
            // Determine banner size class
            const sizeClass = banner.size === 'large' 
              ? 'md:col-span-2' 
              : '';
            
            // Map background colors to Tailwind classes
            let bgColorClass = 'bg-purple-50';
            if (banner.bgColor) {
              if (banner.bgColor === '#f2eaf6') bgColorClass = 'bg-purple-50';
              else if (banner.bgColor === '#e8f4ff') bgColorClass = 'bg-blue-50';
              else if (banner.bgColor === '#e8f6ea') bgColorClass = 'bg-green-50';
              else bgColorClass = 'bg-purple-50';
            }
            
            return (
              <motion.div 
                whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                className={`${sizeClass} ${bgColorClass} overflow-hidden rounded-lg relative p-6 flex flex-col md:flex-row items-center transition-all duration-300`}
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="md:w-3/5 z-10 text-center md:text-left mb-6 md:mb-0">
                  <h3 className="text-sm font-medium text-primary mb-2">{banner.subtitle}</h3>
                  <h2 className="text-2xl font-bold text-neutral-dark mb-3">{banner.title}</h2>
                  <p className="text-neutral mb-5">{banner.text}</p>
                  <Link 
                    to={banner.link} 
                    className="inline-flex items-center justify-center px-5 py-2 bg-primary text-white rounded-md transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    Shop Now
                  </Link>
                </div>
                
                <div className="md:w-2/5 flex justify-center md:absolute md:right-0 md:bottom-0">
                  <img 
                    src={bannerImage} 
                    alt={banner.title} 
                    className="max-h-32 md:max-h-48 object-contain transition-all duration-500 transform hover:scale-110 hover:rotate-3"
                  />
                </div>
                
                {banner.discount && (
                  <div className="absolute top-4 right-4 w-14 h-14 rounded-full bg-secondary text-white flex flex-col items-center justify-center text-xs font-bold z-20">
                    <span className="text-sm">-{banner.discount}%</span>
                    <span>Sale</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Banner; 