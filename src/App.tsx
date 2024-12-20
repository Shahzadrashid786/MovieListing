import React, { FC } from "react";
import MoviesContainer from "./components/MoviesContainer.tsx";

import "./App.css";

const App: FC = () => {

  return (
    <div className="app-wrapper">
      <MoviesContainer />
    </div>
  );
};

export default App;
