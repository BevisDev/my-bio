import { Link } from "react-router-dom";
import {
  MY_MOVIE_PATH,
  MY_CV_PATH,
  MY_TODO_PATH,
} from "../../constant/PathConst";

const ProjectDashBoard = () => {
  return (
    <section className="dashboard-projects text-center py-3 px-32 rounded-2xl shadow-md mb-2">
      <h3 className="mb-1 font-medium">My Projects</h3>
      <Link
        to={MY_CV_PATH}
        className="mb-2 rounded-lg shadow-md h-[3rem] flex-center"
      >
        My CV
      </Link>
      <Link
        to={MY_TODO_PATH}
        className="mb-2 rounded-lg shadow-md h-[3rem] flex-center"
      >
        My To Do
      </Link>
      <Link
        to={MY_MOVIE_PATH}
        className="mb-2 rounded-lg shadow-md h-[3rem] flex-center"
      >
        My Movie
      </Link>
    </section>
  );
};

export default ProjectDashBoard;
