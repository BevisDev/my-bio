import { Link } from "react-router-dom";
import {
  MY_MOVIE_PATH,
  MY_CV_PATH,
  MY_TODO_PATH,
} from "../../constant/PathConst";

const ProjectDashBoard = () => {
  return (
    <section className="dashboard-projects text-center py-3 px-32 rounded-xl mb-2">
      <h3 className="mb-1 font-medium">My Projects</h3>
      <Link
        to={MY_CV_PATH}
        className="mb-2 rounded-lg shadow-lg h-[3rem] flex-center border-t-[2px]"
      >
        My CV
      </Link>
      <Link
        to={MY_TODO_PATH}
        className="mb-2 rounded-lg shadow-md h-[3rem] flex-center border-t-[2px]"
      >
        My To Do
      </Link>
      <Link
        to={MY_MOVIE_PATH}
        className="mb-2 rounded-lg shadow-md h-[3rem] flex-center border-t-[2px]"
      >
        My Movie
      </Link>
    </section>
  );
};

export default ProjectDashBoard;
