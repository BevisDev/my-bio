import CatCodes from "../../assets/icon/bongoCatCodes.gif";
import { CV_END_ID } from "../../constant/Const";

const TheEndCV = () => {
  return (
    <section id={CV_END_ID} className="pt-[90px]">
      <div className="cv-main-container">
        <div className="cv-main-section-container">
          <div className="end-header mb-9">
            <div className="text-[12px] text-white font-light border-solid-1px border-[#565656] rounded-[30px] px-[20px] py-[5px] mb-[53px] inline-flex items-center">
              <i className="las la-handshake text-[14px] mr-[10px] mb-[1px]"></i>
              THE END
            </div>
            <div className="text-[48px] leading-[60px] text-white font-light">
              Thank you and{" "}
              <span className="text-primary">Warmest Regards</span>
            </div>
          </div>
          <p className="mb-2">
            Finally, I would like to say <b>"Thank You"</b> for spent time to
            look at my CV profile.
          </p>
          <div className="w-[30rem] h-[22rem]">
            <img className="image" src={CatCodes} alt="CAT" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheEndCV;
