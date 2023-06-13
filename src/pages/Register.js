import React from "react";
import { register } from "../api/auth";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const Register = () => {
  const [userInfo, setUserInfo] = useState({});

  function handleChange(e) {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  }

  const { mutate: registerFn } = useMutation({
    mutationFn: () => register(userInfo),
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    registerFn();
  };
  return (
    <div className="flex items-center justify-center mt-9">
      <div className="max-w-md w-full px-6 py-8 bg-orange-900 rounded-md">
        <h2 className="text-3xl text-white font-semibold mb-6">Register</h2>
        <form>
          <div className="mb-4">
            <label className="block text-white text-sm font-medium mb-2">
              Username
            </label>
            <input type="text" className="w-full px-4 py-2 border rounded-md" />
          </div>
          <div className="mb-4">
            <label className="text-white">Email</label>
            <input
              onChange={handleChange}
              type="email"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="text-white">Password</label>
            <input
              onChange={handleChange}
              type="password"
              className="w-full px-4 py-2 border rounded-md"
            />
            <div className="mb-4 mt-5">
              <label
                htmlFor="image"
                className="block text-white text-sm font-medium mb-2"
              >
                Profile Image
              </label>
              <input
                onChange={handleChange}
                type="file"
                name="image"
                className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleFormSubmit}
              type="submit"
              className="px-4 py-2 border rounded-md bg-blue-300 hover:bg-blue-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
