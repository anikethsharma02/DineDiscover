// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// interface NavbarProps {
//   onLoginClick: () => void;  // Add a prop for handling login click
// }

// const Navbar: React.FC<NavbarProps> = ({ }) => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <div className="logo">
//           <Link to="/">
//             <img src="/Images/logo.png" alt="Dine Discover Logo" />
//           </Link>
//         </div>
//         <Link to="/login">
//           <button className="login-button">Login</button>
//         </Link>
//       </div>
//       <ul className="nav-links">
//       <li><Link to="/homepage">Home</Link></li>
//         <li><Link to="/restaurants">Restaurants</Link></li>
//         <li><Link to="/cafes">Cafes</Link></li>
//         <li><Link to="/Special">Special</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;




import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase'; // Make sure you have the correct path to your Firebase configuration
import { onAuthStateChanged, signOut } from 'firebase/auth';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | undefined>(undefined); // State to track login status
  const navigate = useNavigate();
  

  // Check if the user is logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user); // Set to true if user exists, false otherwise
    });

    return () => unsubscribe(); // Clean up subscription on unmount
  }, []);

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <Link to="/">
            <img src="/Images/logo.png" alt="Dine Discover Logo" />
          </Link>
        </div>
        {/* Conditional Rendering of Login/Logout Button */}
        {isLoggedIn === undefined ? ( // Loading state
          <button className="login-button" disabled>
            Loading...
          </button>
        ) : isLoggedIn ? (
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="login-button">Login</button>
          </Link>
        )}
      </div>
      <ul className="nav-links">
        <li><Link to="/homepage">Home</Link></li>
        <li><Link to="/restaurants">Restaurants</Link></li>
        <li><Link to="/cafes">Cafes</Link></li>
        <li><Link to="/special">Special</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
