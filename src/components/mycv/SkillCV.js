import { CV_SKILLS_ID } from "../../constant/Const";

const SkillCV = () => {
  return (
    <section id={CV_SKILLS_ID} className="pt-[68px] pb-[110px]">
      <div className="cv-main-container">
        <div className="cv-main-section-container">
          <div className="skills-header">
            <div className="text-[12px] text-white font-light border-solid-1px border-[#565656] rounded-[30px] px-[20px] py-[5px] mb-[53px] inline-flex items-center">
              <i className="las la-code text-[14px] mr-[10px] mb-[1px]"></i>
              MY SKILLS
            </div>
            <div className="text-[48px] leading-[60px] text-white font-light mb-9">
              My <span className="text-primary">Advantages</span>
            </div>
          </div>
          <div className="pt-5 text-[65px] grid grid-cols-6 gap-20">
            <i className="devicon-java-plain colored"></i>
            <i className="devicon-spring-plain colored"></i>
            <i className="devicon-microsoftsqlserver-plain-wordmark colored"></i>
            <i className="devicon-mysql-plain-wordmark colored"></i>
            <i className="devicon-redis-plain-wordmark colored"></i>
            <i className="devicon-git-plain colored"></i>
            <i className="devicon-react-original colored"></i>
            <i className="devicon-html5-plain colored"></i>
            <i className="devicon-css3-plain colored"></i>
            <i className="devicon-javascript-plain colored"></i>
            <i className="devicon-tailwindcss-plain colored"></i>
            <i className="devicon-bootstrap-plain-wordmark colored"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillCV;
