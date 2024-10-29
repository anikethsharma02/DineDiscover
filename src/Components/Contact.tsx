import React from 'react';
import './Contact.css';

const Contact = () => {
    const developers = [
        {
            image:'./Images/Anusha1.JPG',
            name:' Gaddam Lakshmi Anusha',
            role:'Frontend Developer',
            email:'glanusha23@gmail.com'
        },
        {
            image:'./Images/Aniketh.jpg',
            name:'Aniketh Kumar Sharma',
            role:'Backend Developer and Database',
            email:'ankithsharma068@gmail.com'
        },
        {
            image:'./Images/Pranaya.jpg',
            name:'Cheerka Pranaya',
            role:'Testing[Performance,BlackBox testing,White Box Testing]',
            email:'cheerkapranaya@gmail.com'
        },
        {
            image:'./Images/Sai Pavan.png',
            name: 'Alakuntla SaiPavan Kumar',
            role: 'Information Gathering & Documentation',
            email:'sunnysai942@gmail.com'
        },
    ];

    return (
        <div className="contact-page">
            <h2 className="contact-header">Meet the Team</h2>
            <div className="contact-grid">
                {developers.map((developer, index) => (
                    <div key={index} className="contact-card">
                        <img src={developer.image} alt={developer.name} className="contact-image" />
                        <h3 className="contact-name">{developer.name}</h3>
                        <p className="contact-role">{developer.role}</p>
                        <a href={`mailto:${developer.email}`} className="contact-email">{developer.email}</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Contact;