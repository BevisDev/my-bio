import HomeCV from "../../components/mycv/HomeCV";
import AboutCV from "../../components/mycv/AboutCV";
import ExperienceCV from "../../components/mycv/ExperienceCV";
import EducationCV from "../../components/mycv/EducationCV";
import SkillCV from "../../components/mycv/SkillCV";
import CertificateListCV from "../../components/mycv/CertificateListCV";
import TheEndCV from "../../components/mycv/TheEndCV";

const MainCvPage = () => {
  return (
    <main>
      <HomeCV />
      <AboutCV />
      <ExperienceCV />
      <EducationCV />
      <SkillCV />
      <CertificateListCV />
      <TheEndCV />
    </main>
  );
};

export default MainCvPage;
