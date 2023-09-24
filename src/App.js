import { Fragment } from "react";
import "swiper/scss";
import HomePage from "./screens/movie/HomePage";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./screens/dashboard/DashBoard";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/my-bio.github.io" element={<DashBoard />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
