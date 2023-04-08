import { Fragment } from "react";
import "./App.css";
import "swiper/scss";
import HomePage from "./screens/movie/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/my-bio.github.io" element={<HomePage />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
