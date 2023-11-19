import {
  MY_MOVIE_PATH,
  MY_CV_PATH,
  MY_TODO_PATH,
} from "../../constant/PathConst";

const ProjectDashBoard = () => {
  return (
    <section className="dashboard-projects text-center py-3 px-32 rounded-2xl shadow-md mb-2">
      <h3 className="mb-1 font-medium">My Projects</h3>
      <a
        className="mb-2 rounded-lg shadow-md h-[3rem] flex-center"
        href={MY_CV_PATH}
      >
        My CV
      </a>
      <a
        className="mb-2 rounded-lg shadow-md h-[3rem] flex-center"
        href={MY_TODO_PATH}
      >
        My To Do
      </a>
      <a
        className="mb-2 rounded-lg shadow-md h-[3rem] flex-center"
        href={MY_MOVIE_PATH}
      >
        My Movie
      </a>
    </section>
  );
};

export default ProjectDashBoard;
