const initialState = {
  movieList: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SETLIST":
      return { ...state, movieList: action.payload };
    case "DECREMENT":
      return { ...state, movieList: state.movieList };
    default:
      return state;
  }
};

export default rootReducer;
