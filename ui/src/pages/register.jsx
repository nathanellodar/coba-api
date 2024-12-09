import React from "react";

const Register = () => {
    return (
        <div className="">
            <div className="text-center py-8">
                <h1 className="text-4xl font-bold text-green-600">Trash Up Application</h1>
                <p className="text-gray-500 mt-2">Your partner for a cleaner future</p>
            </div>

            <div className="flex justify-center items-center">
        <form className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
          <div className="mb-4">
            <label htmlFor="text" className="block text-sm font-medium mb-1">
              Name 
            </label>
            <input
              type="text"
              id="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
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
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
          <p className="text-sm text-center text-gray-500 mt-4">
            Already have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Sign in
            </a>
          </p>
        </form>
      </div>
        </div>
    )
}

export default Register;