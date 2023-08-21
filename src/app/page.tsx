"use client";

import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { IindividualMovieData } from "@/helper/intances";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchPopularMovies } from "@/redux/movieSlice";
import React, { useEffect } from "react";

const Home = () => {
  const dispatch = useAppDispatch();
  const { isLoading, movies, currentPage, totalPages, totalResults } =
    useAppSelector((state) => state.movies);

  // function to dispatch action to get movies
  const getMovies = (page: number) => {
    if (page === 0 || page < 0) {
      dispatch(fetchPopularMovies(1));
    } else {
      dispatch(fetchPopularMovies(page));
    }
  };

  useEffect(() => {
    getMovies(0);
  }, []);

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

      {/* footer for next and prev page */}
      <footer className="flex px-10 bg-teal-50 h-14 items-center justify-between shadow shadow-teal-50">
        {/* previous button */}
        <button
          disabled={currentPage === 0 || currentPage === 1}
          className="bg-teal-500 hover:bg-teal-600 rounded-md py-2 px-5 font-bold text-white"
          onClick={() => getMovies(currentPage - 1)}
        >
          Previous
        </button>

        {/* for displaying current and total page */}
        <div className="font-semibold">
          {currentPage < 10 ? `0${currentPage}` : currentPage} of {totalPages}
        </div>

        {/* next button */}
        <button
          disabled={currentPage === totalPages}
          className="bg-teal-500 hover:bg-teal-600 rounded-md py-2 px-5 font-bold text-white"
          onClick={() => getMovies(currentPage + 1)}
        >
          Next
        </button>
      </footer>
    </div>
  );
};

export default Home;
