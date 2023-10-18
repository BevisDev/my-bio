import { MY_MOVIE_API, MY_CV_API, MY_TODO_API } from "../../constant/PathConst";

const DashBoardProjects = () => {
  return (
    <section className="dashboard-projects text-center py-3 px-32 rounded-2xl shadow-md mb-2">
      <h3 className="mb-1 font-medium">My Projects</h3>
      <a className="project" href={MY_CV_API}>
        My CV
      </a>
      <a className="project" href={MY_TODO_API}>
        My To Do
      </a>
      <a className="project" href={MY_MOVIE_API}>
        My Movie
      </a>
    </section>
  );
};

export default DashBoardProjects;
