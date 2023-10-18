import {
  CERTIFCATE_ICON_PATH,
  CV_ABOUT_ID,
  CV_CERTIFICATES_ID,
  CV_EDUCATION_ID,
  CV_EXPERIENCE_ID,
  CV_HOME_ID,
  CV_SKILLS_ID,
  CV_THEEND_ID,
  EDUCATION_ICON_PATH,
  END_ICON_PATH,
  EXPERIENCE_ICON_PATH,
  HOME_ICON_PATH,
  SKILLS_ICON_PATH,
  USER_ICON_PATH,
} from "../../constant/PathConst";

const MenuScroll = () => {
  return (
    <div className="menu-scroll">
      <ul className="cv-fixed-border flex-col-center gap-5 right-[68px] top-[50%] translate-y-[-50%] text-center p-6 z-20 border-[#575757] w-[55px]">
        <li>
          <a href={CV_HOME_ID} className="menu-icon-link">
            <span className="menu-icon-title">Home</span>
            <div className="w-[20px] h-[20px]">
              <img src={HOME_ICON_PATH} alt="home--v1" className="image" />
            </div>
          </a>
        </li>
        <li>
          <a href={CV_ABOUT_ID} className="menu-icon-link">
            <span className="menu-icon-title">About</span>
            <div className="w-[20px] h-[20px]">
              <img src={USER_ICON_PATH} alt="about--v1" className="image" />
            </div>
          </a>
        </li>
        <li>
          <a href={CV_EXPERIENCE_ID} className="menu-icon-link">
            <span className="menu-icon-title">Experience</span>
            <div className="w-[20px] h-[20px]">
              <img
                src={EXPERIENCE_ICON_PATH}
                alt="experience--v1"
                className="image"
              />
            </div>
          </a>
        </li>
        <li>
          <a href={CV_EDUCATION_ID} className="menu-icon-link">
            <span className="menu-icon-title">Education</span>
            <div className="w-[20px] h-[20px]">
              <img
                src={EDUCATION_ICON_PATH}
                alt="education--v1"
                className="image"
              />
            </div>
          </a>
        </li>
        <li>
          <a href={CV_SKILLS_ID} className="menu-icon-link">
            <span className="menu-icon-title">Skills</span>
            <div className="w-[20px] h-[20px]">
              <img src={SKILLS_ICON_PATH} alt="skills--v1" className="image" />
            </div>
          </a>
        </li>
        <li>
          <a href={CV_CERTIFICATES_ID} className="menu-icon-link">
            <span className="menu-icon-title">Certificates</span>
            <div className="w-[20px] h-[20px]">
              <img
                src={CERTIFCATE_ICON_PATH}
                alt="certifcates--v1"
                className="image"
              />
            </div>
          </a>
        </li>
        <li>
          <a href={CV_THEEND_ID} className="menu-icon-link">
            <span className="menu-icon-title">End</span>
            <div className="w-[20px] h-[20px]">
              <img src={END_ICON_PATH} alt="end--v1" className="image" />
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MenuScroll;
