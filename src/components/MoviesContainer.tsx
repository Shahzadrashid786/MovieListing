import React, { FC, useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./movies.css";
import { useApi } from "../hooks/useApi.ts";
import MovieLists from "./MovieLists.tsx";
import MovieDescription from "./MovieDescription.tsx";
import SearchInput from "./SearchInput.tsx";

const MoviesContainer: FC = () => {
  const movieList = useSelector((state: any) => state.movieList);
  const dispatch = useDispatch();
  const [movieLists, setMovieLists] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const { isLoading, data, error } = useApi(
    "https://swapi.py4e.com/api/films/?format=json",
    "GET"
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (data && data.results) {
      dispatch({ type: "SETLIST", payload: data?.results });
      setMovieLists(data?.results);
    }
  }, [data]);

  const toggelDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownVisible(false);
    }
  };

  const handleMovieSelect = (list) => {
    setSelectedMovie(list);
  };

  const handleSearch = (e) => {
    setMovieLists(
      movieList?.filter(
        (obj) =>
          String(obj?.episode_id)
            ?.toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          String(obj?.title)
            ?.toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          String(obj?.release_date)
            ?.toLowerCase()
            .includes(e.target.value.toLowerCase())
      )
    );
  };

  const handleMenuClick = (e, sortType) => {
    e.preventDefault();
    setIsDropdownVisible(false);
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Something went wrong!!!</h1>;

  return (
    <>
      <div className="global-search">
        <div className="sort-wrapper" ref={dropdownRef}>
          <button className="sort-button" onClick={toggelDropdown}>
            Sort by
          </button>
          {isDropdownVisible && (
            <div className="sort-menu">
              <a href="#" onClick={(e) => handleMenuClick(e, "episode")}>
                By Episode
              </a>
              <a href="#" onClick={(e) => handleMenuClick(e, "rating")}>
                By Rating
              </a>
              <a href="#" onClick={(e) => handleMenuClick(e, "year")}>
                By Release date
              </a>
            </div>
          )}
        </div>
        <SearchInput
          type="search"
          name="movieSearchBox"
          cssClass="search-input"
          placeholder="Type to search..."
          onChange={handleSearch}
        />
      </div>
      <div className="movie-container">
        <div className="movie-menu">
          <MovieLists
            lists={movieLists}
            handleListClick={handleMovieSelect}
            selectedMovie={selectedMovie}
          />
        </div>
        <div className="movie-overview">
          <MovieDescription selectedMovie={selectedMovie} />
        </div>
      </div>
    </>
  );
};

export default MoviesContainer;
