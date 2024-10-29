import React from 'react';
import './Restaurants.css';

const Restaurants = () => {
  const categories = [
    { 
      image: './Images/Absolute Barbecues1.jpg', 
      title: 'Absolute Barbecues', 
      location: 'Jubilee Hills, Hyderabad', 
      price: '₹1,200 for 2 (approx)', 
      cuisine: 'Chinese, North Indian, BBQ', 
      rating: 4.5, 
      label: 'Popular for food' 
    },
    { 
      image: './Images/Tatva.jpg', 
      title: 'Tatva', 
      location: 'Jubilee Hills, Hyderabad', 
      price: '₹1,500 for 2 (approx)', 
      cuisine: 'Vegetarian, Continental, Italian', 
      rating: 4.3, 
    },
    { 
      image: './Images/AnTeRa Kitchen and Bar.jpg', 
      title: 'AnTeRa Kitchen and Bar', 
      location: 'Jubilee Hills, Hyderabad', 
      price: '₹2,000 for 2 (approx)', 
      cuisine: 'Indian, Continental', 
      rating: 4.2, 
      label: 'In high demand' 
    },
    { 
      image: './Images/Chandra haveli star restaurant.jpg', 
      title: 'Chandra haveli star restaurant', 
      location: 'Jubilee Hills, Hyderabad', 
      price: '₹1,000 for 2 (approx)', 
      cuisine: 'South Indian, North Indian', 
      rating: 4.5,
    },
    { 
      image: './Images/Krishnapatnam.jpg', 
      title: 'Krishnapatnam', 
      location: 'Jubilee Hills, Hyderabad', 
      price: '₹1,000 for 2 (approx)', 
      cuisine: 'South Indian, North Indian', 
      rating: 4.4,
    },
    { 
      image: './Images/President Dhaba Bar and Kitchen.jpg', 
      title: 'President Dhaba Bar and Kitchen', 
      location: 'Jubilee Hills, Hyderabad', 
      price: '₹1,000 for 2 (approx)', 
      cuisine: 'South Indian, North Indian', 
      rating: 4.7,
    },
    { 
      image: './Images/Kodi Kura Chitti Gaare.jpg', 
      title: 'Kodi Kura Chitti Gaare', 
      location: 'Jubilee Hills, Hyderabad', 
      price: '₹1,000 for 2 (approx)', 
      cuisine: 'South Indian', 
      rating: 4.4,
    },
    { 
      image: './Images/Chutneys.jpg', 
      title: 'Chutneys', 
      location: 'Jubilee Hills, Hyderabad', 
      price: '₹1,000 for 2 (approx)', 
      cuisine: 'South Indian, North Indian', 
      rating: 4.2,
    },
  ];

  const reviews = [
    {
      name: 'Anonymous',
      res:'Absolute Barbecues',
      comment: 'Best buffet in Hyderabad. You will find anything and everything. And everything is literally so delicious',
      rating: 5
    },
    {
      name: 'Anonymous',
      res:'Tatva',
      comment: "Awesome place for north indian and chinese dishes",
      rating: 4
    },
    {
      name: 'Anonymous',
      res:'AnTeRa Kitchen and Bar',
      comment: "A good place to eat, served tasty food compared to many restaurants in that area",
      rating: 4.5
    }
  ];

  return (
    <div className="restaurant-menu">
      <h2 className="menu-header">Explore Restaurants of Jubilee Hills-Hyderabad</h2>
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
              <p className="review-res">"{review.res}"</p>
              <p className="review-comment">"{review.comment}"</p>
              <div className="review-rating">Rating: ⭐ {review.rating}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
