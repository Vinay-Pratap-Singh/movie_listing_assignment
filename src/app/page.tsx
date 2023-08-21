import React, { useEffect } from "react";
import Header from "./components/Header";
import axiosInstance from "./helper/axiosInstance";

const Home = () => {
  useEffect(() => {
    const res = axiosInstance.get("/");
  }, []);
  return (
    <div>
      {/* adding the header */}
      <Header />
    </div>
  );
};

export default Home;
