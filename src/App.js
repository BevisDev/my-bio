import { Fragment } from "react";
import "swiper/scss";
import HomePage from "./screens/movie/HomePage";
import { Route, Routes } from "react-router-dom";
import MyCV from "./screens/mycv/MyCV";
import DashBoard from "./screens/dashboard/DashBoard";
import {
  DASH_BOARD_PATH,
  MY_MOVIE_PATH,
  MY_CV_PATH,
  MY_TODO_PATH,
} from "./constant/PathConst";
import MyToDo from "./screens/mytodo/MyToDo";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path={DASH_BOARD_PATH} element={<DashBoard />}></Route>
        <Route path={MY_CV_PATH} element={<MyCV />}></Route>
        <Route path={MY_TODO_PATH} element={<MyToDo />}></Route>
        <Route path={MY_MOVIE_PATH} element={<HomePage />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
