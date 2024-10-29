// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import './Auth.css';  // Assuming you're using the provided CSS

// // const Login: React.FC = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');

// //   const handleLogin = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     // Handle login logic here
// //     console.log('Logging in with', { email, password });
// //   };

// //   return (
// //     <div className="auth-page">
// //       <div className="auth-container">
// //         <h1>Login</h1>
// //         <form onSubmit={handleLogin}>
// //           <div className="form-group">
// //             <label htmlFor="email">Email</label>
// //             <input
// //               type="email"
// //               id="email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               required
// //             />
// //           </div>
// //           <div className="form-group">
// //             <label htmlFor="password">Password</label>
// //             <input
// //               type="password"
// //               id="password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               required
// //             />
// //           </div>
// //           <button type="submit" className="auth-button">Login</button>
// //         </form>
// //         <p className="toggle-auth-mode">
// //           Don't have an account? <Link to="/signup">Sign up here</Link>
// //         </p>
// //         <p className="back-button">
// //           <Link to="/">Back to Homepage</Link>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
// import './Auth.css';

// const Login: React.FC = () => {
//   const [email, setEmail] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const navigate = useNavigate(); // Initialize navigate

//   const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log('Logging in with', { email, password });

//     // After successful login logic, navigate to homepage
//     navigate('/');
//   };

//   return (
//     <div className="auth-page">
//       <div className="auth-container">
//         <h1>Login</h1>
//         <form onSubmit={handleLogin}>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="auth-button">Login</button>
//         </form>
//         <p className="toggle-auth-mode">
//           Don't have an account? <Link to="/signup">Sign up here</Link>
//         </p>
//         <p className="back-button">
//           <Link to="/">Back to Homepage</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;





import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';
import { auth } from './firebase'; // Import Firebase auth
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null); // To store error messages
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Attempt to sign in the user with Firebase
      await signInWithEmailAndPassword(auth, email, password);
      setError(null); // Clear any previous errors
      console.log('Login successful');
      navigate('/'); // Redirect to homepage
    } catch (err) {
      // Handle login error
      setError('Invalid email or password. Please try again.');
      console.error('Login error:', err);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
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
          {error && <p className="error-message">{error}</p>} {/* Display error message */}
          <button type="submit" className="auth-button">Login</button>
        </form>
        <p className="toggle-auth-mode">
          Don't have an account? <Link to="/signup">Sign up here</Link>
        </p>
        <p className="back-button">
          <Link to="/">Back to Homepage</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
