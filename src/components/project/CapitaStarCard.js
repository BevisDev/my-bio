import STAR from "../../assets/icon/start-94.png";
import { CAPITASTAR_PATH } from "../../constant/PathConst";

const CapitaStarCard = () => {
  return (
    <section
      className="capitaStar-card pl-[74px] pb-[60px] relative 
      before:contents-[''] before:bg-[#656565] before:w-[12px] before:h-[12px] before:absolute 
      before:left-[-5px] before:top-[7px] before:rounded-[50%] before:transition-duration-300
      after:contents-[''] after:bg-[#333333] after:absolute after:left-0 after:top-[10px] after:w-[1px] after:h-full after:z-[-1]"
    >
      <div className="joined-date mb-7">August 2022 - Present</div>
      <div className="text-[24px] font-light mb-[12px] text-white">
        FPT Software
      </div>
      <div className="mb-[5px] flex items-center justify-between">
        <div className="flex-items-center gap-2">
          <div className="star-icons flex-items-center">
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
        <div className="text-[14px]">
          <span>Size: 37 member</span>
        </div>
      </div>
      <p className="text-[13px] mb-[18px]">
        <i>
          This is a loyalty application which is made by my team. Now our team
          is taking responsibility maintenance for this product. Besides,
          analyze data is used in application for transfering these data into
          web report for client and exposing api for partners integrate.
        </i>
      </p>
      <div className="text-[20px] text-white font-light mb-[5px]">
        Full-stack Developer
      </div>
      <ul className="list-disc pl-[16px] text-[16px]">
        <li>Develop application both server side and client side.</li>
        <li>
          Daily, Grooming, call with customers, call tranfer, weekly, retro
        </li>
        <li>
          Get ticket, analyzing this ticket and estimate time or features can be
          impacted.
        </li>
        <li>
          Base on estimation which got approved. We implement to Dev
          environment.
        </li>
        <li>
          After passed on Dev site. We must complete deploy it to Prod site.
        </li>
      </ul>
    </section>
  );
};

export default CapitaStarCard;
