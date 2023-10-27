import HeaderDashBoard from "./../../components/dashboard/HeaderDashBoard";
import SocialDashBoard from "./../../components/dashboard/SocialDashBoard";
import ProjectDashBoard from "../../components/dashboard/ProjectDashBoard";
import { UL_SOCIAL_DASHBOARD } from "../../constant/Const";

const DashBoard = () => {
  return (
    <section id="dashboard">
      <div className="dashboard-container">
        <HeaderDashBoard />
        <SocialDashBoard eleDOM={UL_SOCIAL_DASHBOARD} />
        <ProjectDashBoard />
      </div>
    </section>
  );
};

export default DashBoard;
