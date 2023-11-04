import SideBarProfileCV from "./../../components/mycv/SideBarProfileCV";
import MenuScrollCV from "./../../components/mycv/MenuScrollCV";
import MainMyCV from "./MainMyCV";
import { CV_HOME_ID } from "../../constant/Const";

const MyCV = () => {
  return (
    <section
      id={CV_HOME_ID}
      className="py-[68px] text-[#999999] leading-[27.2px] bg-[#1f1f1f]"
    >
      <SideBarProfileCV />
      <MenuScrollCV />
      <MainMyCV />
    </section>
  );
};

export default MyCV;
