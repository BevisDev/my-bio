import { CV_EDUCATION_ID } from "../../constant/Const";
import { HUTECH_PATH } from "../../constant/PathConst";

const EducationCV = () => {
  return (
    <section id={CV_EDUCATION_ID} className="py-[68px]">
      <div className="cv-main-container">
        <div className="cv-main-section-container">
          <div className="education-header">
            <div className="border-solid-1px text-[12px] text-white font-light border-[#565656] rounded-[30px] px-[20px] py-[5px] mb-[53px] inline-flex items-center">
              <i className="las la-graduation-cap text-[14px] mr-[10px] mb-[1px]"></i>
              EDUCATION
            </div>
            <div className="text-[48px] leading-[60px] text-white font-light mb-9">
              My <span className="text-primary">Education</span>
            </div>
          </div>
          <div>
            <div className="border-solid-1px mt-[36px] border-[#565656] rounded-[20px] relative py-[41px] px-[48px] mb-[10px]">
              <div className="text-[24px] font-light mb-[12px] text-white">
                Specialized in Information Technology
              </div>
              <p className="text-[13px] text-[#ffff00]">
                <a href={HUTECH_PATH} target="blank">
                  HO CHI MINH CITY UNIVERSITY OF TECHNOLOGY{" "}
                </a>
              </p>
            </div>
            <div className="border-solid-1px mt-[36px] border-[#565656] rounded-[20px] relative py-[41px] px-[48px] mb-[10px]">
              <span className="text-[24px] font-light mb-[12px] text-white">
                2 Website E-commerce
              </span>
              <p className="text-[14px] text-[#999999] mb-[25px]">
                I develop backend webiste using C#, NodeJs.
              </p>
            </div>
            <div className="border-solid-1px mt-[36px] border-[#565656] rounded-[20px] relative py-[41px] px-[48px] mb-[10px]">
              <span className="text-[24px] font-light mb-[2px] text-white">
                Game Zombie Hunter Unity 3D
              </span>
              <p className="text-[14px] text-[#999999] mb-[25px]">
                I develop using C#
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCV;
