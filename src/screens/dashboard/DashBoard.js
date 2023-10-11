import DashBoardHeader from "../../components/dashboard/DashBoardHeader";
import DashBoardProjects from "../../components/dashboard/DashBoardProjects";
import DashBoardSocial from "../../components/dashboard/DashBoardSocial";

const DashBoard = () => {
  return (
    <section id="dashboard">
      <div className="dashboard-container">
        <DashBoardHeader />
        <DashBoardSocial />
        <DashBoardProjects />
      </div>
    </section>
  );
};

export default DashBoard;
