import SideBarProfileCV from "../../components/mycv/SideBarProfileCV";
import MenuLinkCV from "../../components/mycv/MenuLinkCV";
import MainMyCV from "./MainMyCV";
import { CV_HOME_ID } from "../../constant/Const";

const MyCV = () => {
  return (
    <section
      id={CV_HOME_ID}
      className="py-[68px] text-[#999999] leading-[27.2px] bg-[#111729]"
    >
      <SideBarProfileCV />
      <MenuLinkCV />
      <MainMyCV />
    </section>
  );
};

export default MyCV;