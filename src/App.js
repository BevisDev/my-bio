import { Fragment } from "react";
import "swiper/scss";
import HomePage from "./screens/movie/HomePage";
import { Route, Routes } from "react-router-dom";
import MyCV from "./screens/MyCV/MyCV";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/my-bio.github.io" element={<MyCV />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
