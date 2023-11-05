import { CV_SKILLS_ID } from "../../constant/Const";

const SkillCV = () => {
  return (
    <section id={CV_SKILLS_ID} className="pt-[90px]">
      <div className="cv-main-container">
        <div className="cv-main-section-container">
          <div className="skills-header">
            <div className="text-[12px] text-white font-light border-[1px] border-solid border-[#565656] rounded-[30px] px-[20px] py-[5px] mb-[53px] inline-flex items-center">
              <i className="las la-code text-[14px] mr-[10px] mb-[1px]"></i>
              MY SKILLS
            </div>
            <div className="text-[48px] leading-[60px] text-white font-light mb-9">
              My <span className="text-primary">Advantages</span>
            </div>
          </div>
          <div>
            <h3>Backend Skills: </h3>
            <div className="text-[50px] gap-4 flex-items-center">
              <i className="devicon-java-plain-wordmark colored"></i>
              <i className="devicon-csharp-plain-wordmark colored"></i>
              <i className="devicon-microsoftsqlserver-plain-wordmark colored"></i>
              <i className="devicon-mysql-plain-wordmark colored"></i>
              <i className="devicon-redis-plain-wordmark colored"></i>
            </div>
          </div>
          <div className="text-[50px] flex-items-center gap-4 mt-2">
            <i className="devicon-react-original colored"></i>
            <i className="devicon-javascript-plain colored"></i>
            <i className="devicon-tailwindcss-original-wordmark colored"></i>
            <i className="devicon-unity-original-wordmark"></i>
            <i className="devicon-bootstrap-plain-wordmark colored"></i>
            <i className="devicon-git-plain-wordmark colored"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillCV;
