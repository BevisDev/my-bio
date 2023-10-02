import SideBarMenu from "../../components/MyCV/SideBarMenu";
import About from "../../components/MyCV/About";
import Experience from "../../components/MyCV/Experience";
import TheEnd from "../../components/MyCV/TheEnd";
import Education from "../../components/MyCV/Education";
import Skills from "../../components/MyCV/Skills";
import CertificateList from "../../components/MyCV/CertificateList";

const MyCV = () => {
  return (
    <>
      <SideBarMenu />
      <About />
      <hr />
      <Experience />
      <hr />
      <Education />
      <hr />
      {/* <Skills /> */}
      <hr />
      <CertificateList />
      <hr />
      {/* <TheEnd /> */}
      <hr />
    </>
  );
};

export default MyCV;
