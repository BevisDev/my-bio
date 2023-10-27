import CatCodes from "../../assets/icon/bongoCatCodes.gif";
import { CV_END_ID } from "../../constant/Const";

const TheEndCV = () => {
  return (
    <section id={CV_END_ID} className="py-[90px]">
      <div className="cv-main-container">
        <div className="cv-main-section-container">
          <div className="text-[12px] text-white font-light border-[1px] border-solid border-[#565656] rounded-[30px] px-[20px] py-[5px] mb-[53px] inline-flex items-center">
            <i className="las la-handshake text-[14px] mr-[10px] mb-[1px]"></i>
            THE END
          </div>
          <p className="mb-2">
            Finally, I would like to say <b>"Thank You"</b> for spent time to
            look at my CV profile.
          </p>
          <p className="mb-2">
            You're a flower on earth, let's make your life beautiful and
            meaningful (◕‿↼)
          </p>
          <div className="w-[28rem] h-[28rem]">
            <img className="image" src={CatCodes} alt="CAT" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheEndCV;
