import { UL_SOCIAL_CV } from "../../constant/Const";
import SocialDashBoard from "../dashboard/SocialDashBoard";

const SideBarProfileCV = () => {
  return (
    <section
      id="cv-sidebar"
      className="max-w-[350px] left-[20px] top-[50%] translate-y-[-50%] z-10 p-[30px]"
    >
      <h3 className="text-[44px] text-white mb-3 leading-[47px] font-bold">
        Software Developer
      </h3>
      <div className="me mx-auto w-[240px] h-[240px] mb-9">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
          className="image rounded-[30px]"
          alt="NOT_FOUND_AVATAR"
        />
      </div>
      <div className="cv-info text-center text-white text-[20px] mb-4 font-light">
        <div className="mb-1">dev.binhtt@gmail.com</div>
        <div>District 7, Ho Chi Minh City, VietNam.</div>
      </div>
      <SocialDashBoard eleDOM={UL_SOCIAL_CV} />
      <div className="flex-center text-white bg-primary border-[1px] border-solid border-[#565656] rounded-[30px] p-2 gap-2">
        <i class="las la-phone-volume text-[25px]"></i>
        <span className="">+84 901 850 057</span>
      </div>
    </section>
  );
};

export default SideBarProfileCV;
