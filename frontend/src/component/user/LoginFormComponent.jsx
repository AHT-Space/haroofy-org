import React from 'react';
import { Link } from 'react-router-dom';

const LoginFormComponent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="w-full max-w-full flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Side (Hidden on small screens) */}
        <div className="hidden md:flex md:w-3/5 p-8 flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-4 text-center font-serif">Write your Voice</h1>
          <img
            src="https://images.unsplash.com/photo-1626447857058-2ba6a8868cb5?q=80&w=1834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Ink bottle on desk"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>

        {/* Right Side */}
        <div className="w-full md:3/5 lg:w-3/6 p-8 flex flex-col justify-center justify-self-start">
          <h2 className="text-3xl font-semibold mb-6 text-center font-serif">Login</h2>
          <form className="space-y-4 w-full max-w-md mx-auto">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-500 hover:underline">
              register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginFormComponent;