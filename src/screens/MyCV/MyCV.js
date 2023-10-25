import SideBarProfile from "../../components/mycv/SideBarProfile";
import MenuScroll from "../../components/mycv/MenuScroll";
import MyCVMain from "./MyCVMain";

const MyCV = () => {
  return (
    <section className="py-[68px] text-[#999999] leading-[27.2px] bg-[#1f1f1f] h-[100vh]">
      <SideBarProfile />
      <MenuScroll />
      <MyCVMain />
    </section>
  );
};

export default MyCV;
