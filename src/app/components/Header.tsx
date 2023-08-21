import React from "react";

const Header = () => {
  const isLoggedIn = false;
  return (
    <div className="flex items-center justify-between px-10 h-14 bg-gray-50">
      {/* for logo */}
      <h1 className="font-bold text-lg">Movies</h1>

      {/* for search bar */}
      <input
        type="text"
        placeholder="search"
        className="px-2 py-1 font-medium outline-teal-500 hover:outline-teal-500 border-2 border-black rounded-md hover:border-none"
      />

      {/* for login and logout button */}
      {isLoggedIn ? (
        <button className="bg-teal-500 hover:bg-teal-600 rounded-md py-2 px-5 font-bold text-white">
          Logout
        </button>
      ) : (
        <button className="bg-teal-500 hover:bg-teal-600 rounded-md py-2 px-5 font-bold text-white">
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
