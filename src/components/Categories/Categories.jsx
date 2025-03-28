import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: 'Earbuds & Headsets',
      icon: '🎧',
      slug: 'earbuds-headsets',
      color: 'bg-blue-50',
      image: 'https://picsum.photos/seed/earbuds/100/100',
      delay: '100'
    },
    {
      id: 2,
      name: 'Apple Store',
      icon: '📱',
      slug: 'apple-store',
      color: 'bg-orange-50',
      image: 'https://picsum.photos/seed/apple/100/100',
      delay: '200'
    },
    {
      id: 3,
      name: 'Smart Watches',
      icon: '⌚',
      slug: 'smart-watches',
      color: 'bg-green-50',
      image: 'https://picsum.photos/seed/watches/100/100',
      delay: '300'
    },
    {
      id: 4,
      name: 'Game Consoles',
      icon: '🎮',
      slug: 'game-consoles',
      color: 'bg-yellow-50',
      image: 'https://picsum.photos/seed/gaming/100/100',
      delay: '400'
    },
    {
      id: 5,
      name: 'Headphones',
      icon: '🎧',
      slug: 'headphones',
      color: 'bg-purple-50',
      image: 'https://picsum.photos/seed/headphones/100/100',
      delay: '500'
    },
    {
      id: 6,
      name: 'Power Banks',
      icon: '🔋',
      slug: 'power-banks',
      color: 'bg-blue-50',
      image: 'https://picsum.photos/seed/powerbank/100/100',
      delay: '600'
    },
    {
      id: 7,
      name: 'Smart Speakers',
      icon: '📢',
      slug: 'smart-speakers',
      color: 'bg-purple-50',
      image: 'https://picsum.photos/seed/speakers/100/100',
      delay: '700'
    }
  ];

  return (
    <section className="py-16" data-aos="fade-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title mb-10" data-aos="fade-up">Shop By Category</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {categories.map(category => (
            <Link 
              to={`/category/${category.slug}`} 
              className={`${category.color} flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              key={category.id}
              data-aos="fade-up"
              data-aos-delay={category.delay}
            >
              <div className="mb-3 flex justify-center">
                <div className="w-16 h-16 flex items-center justify-center bg-white shadow-sm rounded-full overflow-hidden p-2">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-center text-sm font-medium text-neutral-dark">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories; 