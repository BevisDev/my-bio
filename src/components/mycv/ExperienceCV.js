import { CV_EXPERIENCE_ID } from "../../constant/Const";
import CapitaStarProject from "../project/CapitaStarProject";
import ClassManagement from "../project/ClassManagement";

const ExperienceCV = () => {
  return (
    <section id={CV_EXPERIENCE_ID} className="py-[68px]">
      <div className="cv-main-container">
        <div className="cv-main-section-container">
          <div className="experience-header">
            <div className="text-[12px] text-white font-light border-solid-1px border-[#565656] rounded-[30px] px-[20px] py-[5px] mb-[53px] inline-flex items-center">
              <i className="las la-briefcase text-[14px] mr-[10px] mb-[1px]"></i>
              EXPERIENCE
            </div>
            <div className="text-[48px] leading-[60px] text-white font-light mb-[33px]">
              My <span className="text-primary">Experience</span>
            </div>
          </div>
          <div className="cv-project">
            <CapitaStarProject />
            <ClassManagement />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceCV;
