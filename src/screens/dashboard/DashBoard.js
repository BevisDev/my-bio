import ProjectDashBoard from "../../components/dashboard/ProjectDashBoard";
import HeaderDashBoard from "./../../components/dashboard/HeaderDashBoard";
import SocialDashBoard from "./../../components/dashboard/SocialDashBoard";

const DashBoard = () => {
  return (
    <section id="dashboard">
      <div className="dashboard-container">
        <HeaderDashBoard />
        <SocialDashBoard />
        <ProjectDashBoard />
      </div>
    </section>
  );
};

export default DashBoard;
