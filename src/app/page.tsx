"use client";

import ProductCard from "@/components/ProductCard";
import { IindividualMovieData, ImovieData } from "@/helper/intances";
import { createSession, deleteSession } from "@/redux/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchPopularMovies } from "@/redux/movieSlice";
import React, { useEffect, useState } from "react";

const Home = () => {
  const dispatch = useAppDispatch();
  const [searchedText, setSearchedText] = useState("");
  const [debouncedSearchedText, setDebouncedSearchedText] = useState("");
  const { isLoading, movies, currentPage, totalPages, totalResults } =
    useAppSelector((state) => state.movies);
  const [moviesToBeDisplayed, setMoviesToBeDisplayed] =
    useState<IindividualMovieData[]>(movies);
  const { guest_session_id, isLoggedIn } = useAppSelector(
    (state) => state.auth
  );

  // function to dispatch action to get movies
  const getMovies = (page: number) => {
    if (page === 0 || page < 0) {
      dispatch(fetchPopularMovies(1));
    } else {
      dispatch(fetchPopularMovies(page));
    }
  };

  // for implementing debouncing on search
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchedText(searchedText);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchedText]);

  // for setting the movies to be displayed
  useEffect(() => {
    const data = movies.filter((movie: IindividualMovieData) => {
      return movie.original_title
        .toLowerCase()
        .includes(debouncedSearchedText.toLowerCase());
    });
    setMoviesToBeDisplayed([...data]);
  }, [debouncedSearchedText, movies]);

  // getting movies data on initial render
  useEffect(() => {
    getMovies(0);
  }, []);

  return (
    <div>
      {/* adding the header */}
      <nav className="flex items-center justify-between px-10 h-14 bg-teal-50 shadow shadow-teal-50">
        {/* for logo */}
        <h1 className="font-bold text-lg">Movies</h1>

        {/* for search bar */}
        <input
          type="text"
          placeholder="search"
          className="px-2 py-1 font-medium outline-teal-500 hover:outline-teal-500 border-2 border-black rounded-md hover:border-none"
          onChange={(event) => setSearchedText(event.target.value)}
        />

        {/* for login and logout button */}
        {isLoggedIn ? (
          <button
            onClick={() => dispatch(deleteSession(guest_session_id))}
            className="bg-teal-500 hover:bg-teal-600 rounded-md py-2 px-5 font-bold text-white"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => dispatch(createSession())}
            className="bg-teal-500 hover:bg-teal-600 rounded-md py-2 px-5 font-bold text-white"
          >
            Login
          </button>
        )}
      </nav>

      {/* for movie displaying */}
      <main className="m-10 flex flex-wrap items-center justify-center gap-5">
        {moviesToBeDisplayed &&
          moviesToBeDisplayed.length &&
          moviesToBeDisplayed.map((movie: IindividualMovieData) => {
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
