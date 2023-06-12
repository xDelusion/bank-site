import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="flex items-center justify-center mt-9">
      <div className="max-w-md w-full px-6 py-8 bg-orange-900 rounded-md">
        <img
          className="object-scale-down h-28 w-76 flex justify-center rounded-full"
          src="https://wallpapers.com/images/featured/87h46gcobjl5e4xu.jpg"
          alt="Bordered avatar"
        />

        <div className="mb-4">
          <p className="block text-white text-sm font-medium mb-2">Username</p>
        </div>
        <div className="mb-4">
          <p className="text-white">Email</p>
        </div>
        <div className="mb-4">
          <p className="text-white">Balance:</p>
        </div>
        <div className="mb-4">
          <Link to="/transactions">
            <u className="text-white">
              <p className="text-white">View Transactions</p>
            </u>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
