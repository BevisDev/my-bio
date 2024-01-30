import { UL_SOCIAL_CV } from "../../constant/Const";
import SocialDashBoard from "../dashboard/SocialDashBoard";
import ME_IMAGE from "../../assets/me.jpg";

const SideBarProfileCV = () => {
  return (
    <section className="max-w-[350px] left-[20px] top-[50%] translate-y-[-50%] z-10 p-[30px] border-solid-1px border-[#565656] rounded-[30px] fixed">
      <h3 className="text-[44px] text-white mb-3 leading-[47px] font-bold">
        Software Developer
      </h3>
      <div className="me mx-auto w-[240px] h-[240px] mb-9">
        <img
          src={ME_IMAGE}
          className="image rounded-[30px]"
          alt="NOT_FOUND_AVATAR"
        />
      </div>
      <div className="cv-info text-center text-white text-[20px] mb-5 font-light">
        <div className="mb-1">dev.binhtt@gmail.com</div>
        <div>District 7, Ho Chi Minh City, VietNam.</div>
      </div>
      <SocialDashBoard domType={UL_SOCIAL_CV} />
      <div className="flex-center text-white bg-primary border-solid-1px border-[#565656] rounded-[30px] mt-4 p-2 gap-2">
        <i className="las la-phone-volume text-[25px]"></i>
        <span className="">+84 901 850 057</span>
      </div>
    </section>
  );
};

export default SideBarProfileCV;
