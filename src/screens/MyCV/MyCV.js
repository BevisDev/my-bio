import SideBarProfile from "../../components/mycv/SideBarProfile";
import MenuScroll from "../../components/mycv/MenuScroll";
import About from "../../components/mycv/About";
import Experience from "../../components/mycv/Experience";
import TheEnd from "../../components/mycv/TheEnd";
import Education from "../../components/mycv/Education";
import CertificateList from "../../components/mycv/CertificateList";
import Skills from "../../components/mycv/Skills";

const MyCV = () => {
  return (
    <section
      id="cv"
      className="py-[68px] text-[#999999] leading-[27.2px] h-[100vh]"
    >
      <MenuScroll />
      <SideBarProfile />
      <section id="cv-container">
        {/* <About /> */}
        {/* <hr />
        <Experience />
        <hr />
        <Education />
        <hr />
        <Skills />
        <hr />
        <CertificateList />
        <hr />
        <TheEnd />
        <hr /> */}
      </section>
    </section>
  );
};

export default MyCV;
