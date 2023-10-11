import { Fragment } from "react";
import "swiper/scss";
import HomePage from "./screens/movie/HomePage";
import { Route, Routes } from "react-router-dom";
import MyCV from "./screens/mycv/MyCV";
import DashBoard from "./screens/dashboard/DashBoard";
import {
  DASH_BOARD_API,
  MY_MOVIE_API,
  MY_CV_API,
  MY_TODO_API,
} from "./constant/PathConst";
import MyToDo from "./screens/mytodo/MyToDo";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path={DASH_BOARD_API} element={<DashBoard />}></Route>
        <Route path={MY_CV_API} element={<MyCV />}></Route>
        <Route path={MY_TODO_API} element={<MyToDo />}></Route>
        <Route path={MY_MOVIE_API} element={<HomePage />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
