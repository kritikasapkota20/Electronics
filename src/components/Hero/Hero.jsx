import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Hero = () => {
  const heroSlides = [
    {
      title: 'JBL Tune 510 Ear Wireless Headphones',
      subtitle: 'Hot 20% Discount',
      price: '$149.99',
      image: 'https://picsum.photos/seed/headphones/600/600',
      bgColor: 'bg-purple-50',
      btnColor: 'bg-primary'
    },
    {
      title: 'Smart Watches & Fitness Trackers',
      subtitle: 'Latest Technology',
      price: '$99.99',
      image: 'https://picsum.photos/seed/smartwatch/600/600',
      bgColor: 'bg-blue-50',
      btnColor: 'bg-blue-600'
    },
    {
      title: 'Premium Smartphones & Accessories',
      subtitle: 'New Arrivals',
      price: '$499.99',
      image: 'https://picsum.photos/seed/smartphone/600/600',
      bgColor: 'bg-green-50',
      btnColor: 'bg-emerald-600'
    }
  ];

  const titleAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: 0.2 }
    }
  };

  const subtitleAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: 0.4 }
    }
  };

  const priceAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, delay: 0.6 }
    }
  };

  const buttonAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: 0.8 }
    }
  };

  const imageAnimation = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, delay: 0.5 }
    }
  };

  return (
    <section className="relative overflow-hidden" data-aos="fade-up">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ 
          clickable: true,
          el: '.swiper-pagination'
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        className="h-[500px] md:h-[600px]"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`${slide.bgColor} h-full w-full flex items-center`}>
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between h-full">
                  <motion.div 
                    className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 z-10"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 }
                    }}
                  >
                    <motion.span 
                      className="inline-block text-sm md:text-base font-medium text-primary bg-white px-4 py-1 rounded-full mb-4"
                      variants={subtitleAnimation}
                    >
                      {slide.subtitle}
                    </motion.span>
                    
                    <motion.h1 
                      className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-dark leading-tight mb-4"
                      variants={titleAnimation}
                    >
                      {slide.title}
                    </motion.h1>
                    
                    <motion.p 
                      className="text-xl md:text-2xl font-semibold text-primary mb-8"
                      variants={priceAnimation}
                    >
                      From {slide.price}
                    </motion.p>
                    
                    <motion.button 
                      className={`${slide.btnColor} text-white px-8 py-3 rounded-md font-medium text-base hover:shadow-lg transform transition duration-300 hover:-translate-y-1`}
                      variants={buttonAnimation}
                    >
                      Shop Now
                    </motion.button>
                  </motion.div>
                  
                  <motion.div 
                    className="md:w-1/2 flex justify-center md:justify-end"
                    initial="hidden"
                    animate="visible"
                    variants={imageAnimation}
                  >
                    <img 
                      src={slide.image} 
                      alt={slide.title} 
                      className="max-h-[300px] md:max-h-[400px] object-contain rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Navigation & Pagination */}
      <div className="swiper-pagination absolute bottom-4 z-10 flex justify-center w-full"></div>
      <div className="swiper-button-prev !text-primary !opacity-70 hover:!opacity-100 transition-opacity !hidden md:!flex"></div>
      <div className="swiper-button-next !text-primary !opacity-70 hover:!opacity-100 transition-opacity !hidden md:!flex"></div>
    </section>
  );
};

export default Hero; 