import ToggleMode from "./ToggleMode";
import ME_IMAGE from "../../assets/me.png";

const HeaderDashBoard = () => {
  return (
    <section className="dashboard-header">
      <ToggleMode />
      <div className="dashboard-profile flex-items-center">
        <div className="dashboard-intro py-[19px]">
          <span className="block text-[36px] text-center font-light mb-[20px]">
            Hi, I'm{" "}
            <div></div>
            <b className="font-bold text-[#676767]">Trương Thanh Bình</b>
          </span>
          <div className="dashboard-intro-sub-desc relative px-[2rem]">
            <i>
              "I am a software developer who is always ready to learn and
              explore newer tech stacks."
            </i>
          </div>
        </div>
        <div className="dashboard-avatar min-w-[165px] hover:scale-125">
          <div className="border-[5px] border-[#eaeaec] w-[10rem] h-[10rem] shadow-md rounded-full">
            <img
              src={ME_IMAGE}
              className="image-circle transition-transform-100"
              alt="NOT_FOUND_AVATAR"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderDashBoard;
