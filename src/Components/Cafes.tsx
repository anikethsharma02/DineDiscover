import React from 'react';
import './Cafes.css';

const Cafes = () => {
  const categories = [
    { 
      image: './Images/Theory Patisserie & Cafe.jpg', 
      title: 'Theory Patisserie & Cafe', 
      location: 'Jubilee Hills, Hyderabad', 
      price: '₹1,200 for 2 (approx)', 
      cuisine: 'Chinese, North Indian, BBQ', 
      rating: 4.3, 
    },
    { 
      image: './Images/Van Lavino Cafe & Patisserie.jpg', 
      title: 'Van Lavino Cafe & Patisserie', 
      location: 'Jubilee Hills, Hyderabad', 
      price: '₹1,500 for 2 (approx)', 
      cuisine: 'Vegetarian, Continental, Italian', 
      rating: 4.3, 
    },
    { 
      image: './Images/Terra Cafe & Bistro.jpg', 
      title: 'Terra Cafe & Bistro', 
      location: 'Jubilee Hills, Hyderabad',
      price: '₹2,000 for 2 (approx)', 
      cuisine: 'Indian, Continental', 
      rating: 4.2,  
    },
    { 
      image: './Images/SAGE Farm Cafe.jpg', 
      title: 'SAGE Farm Cafe', 
      location: 'Jubilee Hills, Hyderabad',
      price: '₹1,000 for 2 (approx)', 
      cuisine: 'South Indian, North Indian', 
      rating: 4.4,
    },
    { 
      image: './Images/Cravery Cafe.jpg', 
      title: 'Cravery Cafe', 
      location: 'Jubilee Hills, Hyderabad', 
      price: '₹1,000 for 2 (approx)', 
      cuisine: 'South Indian, North Indian', 
      rating: 4.5,
      label: 'Popular for food' 
    },
    { 
      image: './Images/BEL POSTO THE CAFE.jpg', 
      title: 'BEL POSTO THE CAFE', 
      location: 'Jubilee Hills, Hyderabad', 
      price: '₹1,000 for 2 (approx)', 
      cuisine: 'South Indian, North Indian', 
      rating: 4.4,
    },
    { 
      image: './Images/Lé Vantage Café Bar.jpg', 
      title: 'Lé Vantage Café Bar', 
      location: 'Jubilee Hills, Hyderabad',
      price: '₹1,000 for 2 (approx)', 
      cuisine: 'South Indian', 
      rating: 4.3,
    },
    { 
      image: './Images/Farzi Cafe Hyderabad.jpg', 
      title: 'Farzi Cafe Hyderabad', 
      location: 'Jubilee Hills, Hyderabad', 
      price: '₹1,000 for 2 (approx)', 
      cuisine: 'South Indian, North Indian', 
      rating: 4.3,
      label: 'In high demand'
    },
  ];

  const reviews = [
    {
      name: 'Anonymous',
      cafe:'Farzi Cafe',
      comment: 'Had good experience. We have ordered duo kebab platter and their best seller gundappa biryani. The biryani was well cooked and tasty .',
      rating: 4.5
    },
    {
      name: 'Anonymous',
      cafe:'Van Lavino Cafe &patisserie',
      comment: 'Food is good. Very pleasant. Ambience is great. Food serving time is bit late. There is lots of seating available and can celebrate birthday parties too. ',
      rating: 4.3
    },
    {
      name: 'Anonymous',
      cafe:'Bel Posto The Café',
      comment: 'One of the best desserts in town.Ambience is good but the food is yum. Do try their Tres leches, Eclairs and Classic french toast.',
      rating: 4.3
    }
  ]

  return (
    <div className="restaurant-menu">
      <h2 className="menu-header">Explore Cafes of Jubilee Hills-Hyderabad</h2>
      <div className="menu-grid">
        {categories.map((category, index) => (
          <div key={category.title} className="menu-card">
            <img src={category.image} alt={category.title} className="menu-image" />
            {category.label && <div className="menu-label">{category.label}</div>}
            <div className="menu-details">
              <h3 className="menu-title">{category.title}</h3>
              <p className="menu-location">{category.location}</p>
              <p className="menu-price">{category.price}</p>
              <p className="menu-cuisine">{category.cuisine}</p>
              <div className="menu-rating">⭐ {category.rating}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Reviews Section */}
      <div className="reviews-section">
        <h2 className="reviews-header">Customer Reviews</h2>
        <div className="reviews-list">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <h4 className="reviewer-name">{review.name}</h4>
              <p className="reviewer-cafe">{review.cafe}</p>
              <p className="review-comment">"{review.comment}"</p>
              <div className="review-rating">Rating: ⭐ {review.rating}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cafes;
