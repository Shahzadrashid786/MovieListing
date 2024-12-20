import React, { FC } from "react";

interface MovieListsProps {
  lists: any;
  handleListClick: (param) => void;
  selectedMovie: any;
}

const MovieLists: FC<MovieListsProps> = ({
  lists,
  handleListClick,
  selectedMovie,
}: MovieListsProps) => {
  return (
    <>
      {lists?.length > 0 ? (
        <ul>
          {lists?.map((list) => (
            <li
							data-testid="list-element"
              key={list?.episode_id}
              className={`movie-list ${
                selectedMovie?.episode_id === list?.episode_id
                  ? "movie-list-selected"
                  : ""
              }`}
              onClick={() => handleListClick(list)}
            >
              <div className="col">{`Episode ${list?.episode_id}`}</div>
              <div className="col movie-title">{`${list?.title}`}</div>
              <div className="col">{list?.release_date}</div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="error">{"No search results found"}</div>
      )}
    </>
  );
};

export default MovieLists;
