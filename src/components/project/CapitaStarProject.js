import STAR from "../../assets/icon/start-94.png";
import { CAPITASTAR_PATH } from "../../constant/PathConst";

const CapitaStarProject = () => {
  return (
    <section className="project pl-[74px] pb-[68px] relative">
      <div className="joined-date mb-7">August 2022 - Present</div>
      <div className="text-[24px] font-light mb-[12px] text-white">
        FPT Software
      </div>
      <div className="mb-[5px]">
        <div className="flex-items-center gap-2">
          <div className="h-[16px] flex-items-center">
            <img className="image" src={STAR} alt="STAR" />
            <img className="image" src={STAR} alt="STAR" />
            <img className="image" src={STAR} alt="STAR" />
          </div>
          <span className="text-[#40ced9] text-[20px] font-light">
            <a href={CAPITASTAR_PATH} target="blank">
              CapitaStar
            </a>
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
        <li>Develop application both server side and client side.</li>
        <li>
          Daily, grooming, call with customers, call tranfer, weekly, retro.
        </li>
        <li>
          Get ticket, analyzing this ticket and estimate time or features can be
          impacted.
        </li>
        <li>
          Contribute to develop feature purchase AMEX, VISA, MASTERCARD,
          conversion DBS Point, linked Partner, Campaign.. etc
        </li>
        <li>
          After passed on Dev site. We process UAT site for customer and
          complete deploy it to PROD site.
        </li>
      </ul>
    </section>
  );
};

export default CapitaStarProject;
