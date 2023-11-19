import SideBarProfileCV from "../../components/mycv/SideBarProfileCV";
import MenuLinkCV from "../../components/mycv/MenuLinkCV";
import MainCvPage from "./MainCvPage";
import { CV_HOME_ID } from "../../constant/Const";

const CvPage = () => {
  return (
    <section
      id={CV_HOME_ID}
      className="py-[68px] text-[#999999] leading-[27.2px] bg-[#111729]"
    >
      <SideBarProfileCV />
      <MenuLinkCV />
      <MainCvPage />
    </section>
  );
};

export default CvPage;
