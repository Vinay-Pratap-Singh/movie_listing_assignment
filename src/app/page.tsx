"use client";

import Header from "@/components/Header";
import { useAppDispatch } from "@/redux/hooks";
import { fetchPopularMovies } from "@/redux/movieSlice";
import React, { useEffect } from "react";

const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    (async () => {
      try {
        const res = await dispatch(fetchPopularMovies());
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);
  return (
    <div>
      {/* adding the header */}
      <Header />
    </div>
  );
};

export default Home;
