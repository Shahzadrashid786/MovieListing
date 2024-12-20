import React, { FC } from "react";

interface MovieDesctiptionProps {
  selectedMovie: any;
}

const MovieDesctiption: FC<MovieDesctiptionProps> = ({
  selectedMovie,
}: MovieDesctiptionProps) => {
  return (
    <div className="movie-desc-wrapper">
      {selectedMovie ? (
        <>
          <div className="movie-heading padding-btm">{`Episode ${selectedMovie?.episode_id} - ${selectedMovie?.title}`}</div>
          <div className="movie-blurb">
            <div className="image-container">
              <img src="" alt="Movie" />
              <div class="movie-placeholder">No Image</div>
            </div>
            <div className="movie-bio">{selectedMovie?.opening_crawl}</div>
          </div>
          <div className="movie-director">{`Directed by: ${selectedMovie?.director}`}</div>
          <div className="badge-wrapper">
            <div className="movie-badge">Internet Movie Database: 75%</div>
            <div className="movie-badge">Rotten Tomatoes: 79%</div>
            <div className="movie-badge">Metacritic: 58%</div>
          </div>
        </>
      ) : (
        "Please select a movie to read the details"
      )}
    </div>
  );
};

export default MovieDesctiption;
