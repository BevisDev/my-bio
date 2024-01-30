import { Fragment } from "react";
import "swiper/scss";
import HomePage from "./screens/movie/HomePage";
import { Route, Routes } from "react-router-dom";
import CvPage from "./screens/mycv/CvPage";
import DashBoard from "./screens/dashboard/DashBoard";
import {
  DASH_BOARD_PATH,
  MY_MOVIE_PATH,
  MY_CV_PATH,
  MY_TODO_PATH,
  GROUND_CRAB_PATH,
} from "./constant/PathConst";
import ToDoPage from "./screens/mytodo/ToDoPage";
import GroundCrab from "./screens/gourdCrab/GourdCrab";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path={DASH_BOARD_PATH} element={<DashBoard />}></Route>
        <Route path={MY_CV_PATH} element={<CvPage />}></Route>
        <Route path={GROUND_CRAB_PATH} element={<GroundCrab />}></Route>
        <Route path={MY_TODO_PATH} element={<ToDoPage />}></Route>
        <Route path={MY_MOVIE_PATH} element={<HomePage />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
