import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import './Testimonials.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rebecca Davidson',
      position: 'Tech Enthusiast',
      avatar: '/images/testimonials/user1.jpg',
      rating: 5,
      text: 'Excellent products and incredible customer service! I ordered a pair of wireless headphones that arrived quickly and exceeded my expectations. Will definitely shop here again.'
    },
    {
      id: 2,
      name: 'Jason Powell',
      position: 'Software Developer',
      avatar: '/images/testimonials/user2.jpg',
      rating: 4,
      text: 'I ve been a customer for years and have always had great experiences. The website is easy to navigate and the delivery is consistently fast and reliable.'
    },
    {
      id: 3,
      name: 'Sarah Newman',
      position: 'Digital Creator',
      avatar: '/images/testimonials/user3.jpg',
      rating: 5,
      text: 'The pricing is competitive and the selection is amazing. I found a laptop that was out of stock everywhere else. Customer support was helpful when I had questions about my order.'
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="testimonials-swiper"
        >
          {testimonials.map(testimonial => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  {'★'.repeat(testimonial.rating)}
                  {'☆'.repeat(5 - testimonial.rating)}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <img src={testimonial.avatar} alt={testimonial.name} />
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-position">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials; 