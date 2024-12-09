import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/loginController";

const Login = () => {
  const [email_user, setEmail] = useState('');
  const [password_user, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Gunakan useNavigate di sini

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await login(email_user, password_user); // Panggil fungsi login
      if (result.error) {
        setError(result.message); // Tampilkan error jika ada
        setMessage('');
      } else {
        setMessage(result.message); // Tampilkan pesan sukses
        setError('');
        navigate("/tutorials"); // Navigasi ke /tutorials
      }
    } catch (err) {
      setError('An error occurred during login. Please try again.');
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-green-600">Trash Up Application</h1>
        <p className="text-gray-500 mt-2">Your partner for a cleaner future</p>
      </div>
      <div className="flex justify-center items-center">
        <form className="bg-white p-6 rounded-lg shadow-lg w-96" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email_user}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password_user}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
          {error && <p className="text-sm text-center text-red-500 mt-4">{error}</p>}
          {message && <p className="text-sm text-center text-green-500 mt-4">{message}</p>}
          <p className="text-sm text-center text-gray-500 mt-4">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
  