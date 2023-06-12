import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center mt-9">
      <div className="max-w-md w-full px-6 py-8 bg-orange-900 rounded-md">
        <h2 className="text-3xl text-white font-semibold mb-6">Login</h2>

        <div className="mb-4">
          <label className="block text-white text-sm font-medium mb-2">
            Username
          </label>
          <input type="text" className="w-full px-4 py-2 border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="text-white">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-4 py-2 border rounded-md bg-blue-300 hover:bg-blue-500"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
