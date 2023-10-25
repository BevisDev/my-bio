import DashBoardSocial from "../dashboard/DashBoardSocial";
import { CV_SOCIAL_TYPE } from "../../constant/Const";
import { PHONE_ICON_PATH } from "../../constant/PathConst";

const SideBarProfile = () => {
  return (
    <section
      id="cv-sidebar"
      className="max-w-[350px] left-[20px] top-[50%] translate-y-[-50%] z-10 p-[30px]"
    >
      <h2 className="mb-2 leading-[41px] font-bold">Software Developer</h2>
      <div className="me mx-auto w-[250px] h-[250px] mb-9">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
          className="image rounded-[30px]"
          alt="NOT_FOUND_AVATAR"
        />
      </div>
      <div className="cv-info text-center text-[20px] mb-5 font-light">
        <div className="mb-1">dev.binhtt@gmail.com</div>
        <div>District 7, Ho Chi Minh City, VietNam.</div>
      </div>
      <DashBoardSocial type={CV_SOCIAL_TYPE} />
      <div className="flex-center text-white bg-[#28e98c] border-[1px] border-solid border-[#565656] rounded-[30px] p-2 gap-2">
        <i class="las la-phone-volume text-[25px]"></i>
        <span className="">+84 901 850 057</span>
      </div>
    </section>
  );
};

export default SideBarProfile;
