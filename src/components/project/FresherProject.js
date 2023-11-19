import STAR from "../../assets/icon/start-94.png";

const FresherProject = () => {
  return (
    <section className="project pl-[74px] pb-[68px] relative">
      <div className="joined-date mb-7">June 2022 - August 2022</div>
      <div className="text-[24px] font-light mb-[12px] text-white">
        FPT Software
      </div>
      <div className="mb-[5px]">
        <div className="flex-items-center gap-2">
          <div className="h-[16px] flex-items-center">
            <img className="image" src={STAR} alt="STAR" />
          </div>
          <span className="text-[#40ced9] text-[20px] font-light">
            Internal Fresher Academy
          </span>
        </div>
      </div>
      <p className="text-[13px] mb-[18px] text-[#999999]">
        <i>
          This is a system is used for recruitment activities at Fresher Academy
          such as recruit fresher, manage training activies, report to higher
          manager.
        </i>
      </p>
      <div className="text-[20px] text-white font-light mb-[5px]">
        Full-stack Developer
      </div>
      <ul className="text-[#999999] leading-[30px]">
        <li>Develop application both server side and client side.</li>
        <li>
          Develop detailed design, implement and perform unit test, integration
          test and system test for the migrated application.
        </li>
      </ul>
    </section>
  );
};

export default FresherProject;
