import { CAPITASTAR_PATH } from "../../constant/PathConst";

const CapitaStarProject = () => {
  return (
    <section className="project pl-[74px] pb-[68px] relative">
      <div className="joined-date mb-7">August 2022 - Present</div>
      <div className="text-[24px] font-light mb-[12px] text-[#40ced9]">
        <a href={CAPITASTAR_PATH} target="blank">
          CapitaStar
        </a>
      </div>
      <div className="mb-[5px]">
        <div className="flex-items-center gap-2">
          <span className="text-white text-[15px] font-light">
            Associated with FPT Software
          </span>
        </div>
      </div>
      <p className="text-[13px] mb-[18px] text-[#999999]">
        <i>
          This is a loyalty application. The data is used in application is
          collected into web report for client. Besides, our team manages
          merchants, partner and exposes api for partners integrate.
        </i>
      </p>
      <div className="text-[20px] text-white font-light mb-[5px]">
        Full-stack Developer
      </div>
      <ul className="text-[#999999] leading-[30px]">
        <li>
          Integrate a wide range of third-party services and components like
          payment gateways, conversion point, linked partner.
        </li>
        <li>
          Daily meeting, join grooming, call with customer, call transfer,
          weekly meeting, retro.
        </li>
        <li>
          Create web-based CMSs to enable simplified content management,
          resulting in quicker updates to site information and features.
        </li>
        <li>
          Monitor system health, debugged performance issues, and optimized
          application using both server-side and client-side techniques.
        </li>
        <li>Integrate with mobile team.</li>
      </ul>
    </section>
  );
};

export default CapitaStarProject;
