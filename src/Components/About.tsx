import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <h2 className="about-header">About Us</h2>
            <p className="about-abstract">
                Welcome to DineDiscover
                Abstract  : 
DINE DISCOVER is a web application designed to connect food enthusiasts with restaurants, cafes, and dining places in their area. The platform allows users to search for dining establishments based on location and filter results by ratings, reviews, and cuisine. Users can browse through a comprehensive list of restaurants and cafes, view their menus, and read reviews from other diners. The application also shows current weather conditions, helping users decide if it's the right time to go out. Moreover, DINE DISCOVER suggests suitable food options based on the weather, such as recommending cold dishes during hot weather and hot dishes during cool weather. By leveraging user-generated reviews and ratings, DINE DISCOVER helps restaurants and cafes improve their services and attract more customers. With its user-friendly interface and robust features, DINE DISCOVER is poised to become the go-to platform for foodies and diners looking to explore new culinary experiences in their area.
Tech Stack and Implementation Steps :
Frontend Development with React JS
 	Create a responsive and dynamic user interface using React components.
Backend Development with Spring Boot
 	Set up to handle user requests and interactions with the database.
Database Management with MySQL
Design a relational database schema to store user information

            </p>
        </div>
    );
}

export default About;
