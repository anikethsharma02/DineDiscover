// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Auth.css';  // Assuming you're using the provided CSS
// import { auth } from './firebase';
// import { createUserWithEmailAndPassword } from 'firebase/auth';

// const Signup: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSignup = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await createUserWithEmailAndPassword(auth,email,password);
//       const user = auth.currentUser;
//       console.log(user);
//       console.log("User Registered Sucessfully!!");
      
//     } catch (error) {
//       console.log();
//     }
//     // Handle signup logic here, like checking if passwords match
//     if (password !== confirmPassword) {
//       alert('Passwords do not match');
//     } else {
//       console.log('Signing up with', { email, password });
//     }
//   };

//   return (
//     <div className="auth-page">
//       <div className="auth-container">
//         <h1>Sign Up</h1>
//         <form onSubmit={handleSignup}>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password" 
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="confirm-password">Confirm Password</label>
//             <input
//               type="password"
//               id="confirm-password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="auth-button">Sign Up</button>
//         </form>
//         <p className="toggle-auth-mode">
//           Already have an account? <Link to="/login">Login here</Link>
//         </p>
//         <p className="back-button">
//           <Link to="/">Back to Homepage</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Auth.css';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate(); // Initialize navigate

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User Registered Successfully!');
      setError('');
      navigate('/login'); // Redirect to login page after successful signup
    } catch (error) {
      setError('Error signing up. Please try again.');
      console.error('Signup error:', error);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>} {/* Show error message */}
          <button type="submit" className="auth-button">Sign Up</button>
        </form>
        <p className="toggle-auth-mode">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
        <p className="back-button">
          <Link to="/">Back to Homepage</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
