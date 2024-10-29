import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import Restaurants from './Components/Restaurants';
import Cafes from './Components/Cafes';
import About from './Components/About';
import Contact from './Components/Contact';
import Special from './Components/Special';
import Login from './Components/Login';
import Signup from './Components/Signup';
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";

import {ToastContainer} from "react-toastify";

function App() {
  const [, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };


  return (
    <Router>
      <div className="App">
        <Navbar onLoginClick={handleLoginClick} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/cafes" element={<Cafes />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/special" element={<Special />} />
          <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
          <Route 
            path="/login" 
          />
        </Routes>
        <ToastContainer/>
      </div>
    </Router>
  );
}

export default App;
