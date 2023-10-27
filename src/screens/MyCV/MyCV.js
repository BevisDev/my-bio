import SideBarProfileCV from "./../../components/mycv/SideBarProfileCV";
import MenuScrollCV from "./../../components/mycv/MenuScrollCV";
import MainMyCV from "./MainMyCV";

const MyCV = () => {
  return (
    <section className="py-[68px] text-[#999999] leading-[27.2px] bg-[#1f1f1f]">
      <SideBarProfileCV />
      <MenuScrollCV />
      <MainMyCV />
    </section>
  );
};

export default MyCV;
