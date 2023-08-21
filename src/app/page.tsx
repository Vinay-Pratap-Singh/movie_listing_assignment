"use client";

import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { IindividualMovieData } from "@/helper/intances";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchPopularMovies } from "@/redux/movieSlice";
import React, { useEffect } from "react";

const Home = () => {
  const dispatch = useAppDispatch();
  const { isLoading, movies } = useAppSelector((state) => state.movies);
  console.log(movies);
  useEffect(() => {
    // dispatch(fetchPopularMovies());
  }, [dispatch]);

  return (
    <div>
      {/* adding the header */}
      <Header />

      {/* for movie displaying */}
      <main className="m-10 flex flex-wrap items-center justify-center gap-5">
        {movies &&
          movies.length &&
          movies.map((movie: IindividualMovieData) => {
            return <ProductCard key={movie?.id} data={movie} />;
          })}
      </main>
    </div>
  );
};

export default Home;
