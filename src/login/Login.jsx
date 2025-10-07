import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// SVG Icons for Social Buttons
const GoogleIcon = () => (
  <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039L38.802 6.57C34.543 2.921 29.632 1 24 1C10.745 1 0 11.745 0 25s10.745 24 24 24s24-10.745 24-24c0-1.879-.272-3.702-.789-5.417z" />
    <path fill="#FF3D00" d="M6.306 14.691c-2.213 4.013-3.416 8.641-3.416 13.612c0 2.999.638 5.867 1.729 8.47l-5.61-4.14C-1.84 29.585 0 25.195 0 20c0-3.61.91-7.01 2.516-9.989L8.91 14.86z" />
    <path fill="#4CAF50" d="M24 48c5.636 0 10.745-1.84 14.545-4.919l-5.61-4.143c-2.213 1.488-4.949 2.37-7.935 2.37c-5.223 0-9.655-3.344-11.235-7.918l-5.64 4.14C7.03 42.661 14.938 48 24 48z" />
    <path fill="#1976D2" d="M43.611 20.083L43.595 20L42 20H24v8h11.303c-.792 2.237-2.231 4.14-4.062 5.541l5.61 4.14c3.443-3.131 5.76-7.697 5.76-12.918c0-1.879-.272-3.702-.789-5.417z" />
  </svg>
);

const AppleIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10.323,2.445c-1.225-1.323-3.13-2.012-5.018-2.012c-3.4,0-6.176,2.695-6.176,6.234c0,3.567,2.813,5.613,5.43,5.613c0.985,0,2.625-0.5,3.925-0.5c1.238,0,2.645,0.5,3.9,0.5c2.618,0,5.426-2.046,5.426-5.613C17.81,3.43,13.623-0.45,10.323,2.445z M12.875,13.385c-0.675,1.219-1.92,2.028-3.325,2.028c-1.425,0-2.738-0.856-3.425-2.028C5.23,11.883,4.9,9.48,4.9,7.63c0-0.438,0.038-0.883,0.125-1.325c1.213,0.013,2.6,0.562,3.875,0.562c1.2,0,2.75-0.562,3.875-0.562c0.063,0.45,0.1,0.888,0.1,1.325C12.875,9.48,12.562,11.883,12.875,13.385z" />
  </svg>
);


const Signup = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add signup API logic here
    console.log("Signup data:", formData);
    navigate("/"); // Navigate to a home or dashboard page after signup
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-blue-100 p-4" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}>
      <div className="w-full max-w-5xl flex rounded-2xl shadow-2xl overflow-hidden bg-white">
        
        {/* Left Side: Form */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">Let's Catch Big Dreams!</h1>
          <p className="text-gray-600 mb-8">Pursue your dreams passionately and strive to achieve your goals every day.</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="sr-only">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="Input Username"
              />
            </div>

            <div>
              <label className="sr-only">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="Input your email"
              />
            </div>

            <div className="relative">
              <label className="sr-only">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="Input your password"
              />
              {/* Optional: Add a show/hide password icon here */}
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-lg font-semibold transition-colors"
            >
              Sign Up
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-4">
            By continuing with Google, Apple, or Email, you agree to Mancling <Link to="/terms" className="underline">Terms of Service</Link> and <Link to="/privacy" className="underline">Privacy Policy</Link>.
          </p>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="px-3 text-gray-500 text-sm">or continue with</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 border border-gray-300 p-3 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
              <GoogleIcon />
              Google
            </button>
            <button className="flex-1 border border-gray-300 p-3 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
              <AppleIcon />
              Apple
            </button>
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            Do have an account?{" "}
            <Link to="/login" className="text-blue-500 font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </div>

        {/* Right Side: Image and Illustration */}
        <div className="hidden lg:flex flex-col items-center justify-center w-1/2 bg-blue-400 text-white p-12 text-center">
                    <img 
            src="https://i.imgur.com/Un9H43J.png" // Replace with your own image asset
            alt="Illustration of a fisherman holding a large fish"
            className="w-4/5 max-w-sm mb-6"
          />
          <h2 className="text-3xl font-bold mb-3">Catch Your Biggest Opportunities</h2>
          <p className="text-blue-100 mb-6">
            Become part of our vibrant community of dedicated anglers. Dive into the world of fishing and embark on your exciting journey today. Adventure awaits you on the water!
          </p>
          <div className="flex -space-x-4">
            <img className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://randomuser.me/api/portraits/women/75.jpg" alt="User 1"/>
            <img className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://randomuser.me/api/portraits/men/32.jpg" alt="User 2"/>
            <img className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://randomuser.me/api/portraits/women/54.jpg" alt="User 3"/>
            <img className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://randomuser.me/api/portraits/men/5.jpg" alt="User 4"/>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Signup;


  