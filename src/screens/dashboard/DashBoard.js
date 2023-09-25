import NavigationBar from "../../components/dashboard/NavigationBar";
import About from "../../components/dashboard/About";
import Experience from "../../components/dashboard/Experience";
import TheEnd from "./../../components/dashboard/TheEnd";
import Education from "../../components/dashboard/Education";

const DashBoard = () => {
  return (
    <>
      <NavigationBar />
      <About />
      <hr />
      <Experience />
      <hr />
      <Education />
      <hr />
      <TheEnd />
      <hr />
    </>
  );
};

export default DashBoard;
