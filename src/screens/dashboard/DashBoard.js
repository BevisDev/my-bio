import HeaderDashBoard from "./../../components/dashboard/HeaderDashBoard";
import SocialDashBoard from "./../../components/dashboard/SocialDashBoard";
import ProjectDashBoard from "../../components/dashboard/ProjectDashBoard";
import { UL_SOCIAL_DASHBOARD } from "../../constant/Const";

const DashBoard = () => {
  return (
    <section id="dashboard" className="flex-items-center h-[100vh]">
      <div
        className="dashboard-container max-w-[800px] mx-auto bg-gradient-to-r from-[#f2f1f1] to-[#e5e8f5] 
      p-[30px] text-[1rem] rounded-xl"
      >
        <HeaderDashBoard />
        <SocialDashBoard domType={UL_SOCIAL_DASHBOARD} />
        <ProjectDashBoard />
      </div>
    </section>
  );
};

export default DashBoard;
