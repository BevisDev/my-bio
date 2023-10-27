import {
  CV_ABOUT_ID,
  CV_CERTIFICATES_ID,
  CV_EDUCATION_ID,
  CV_EXPERIENCE_ID,
  CV_HOME_ID,
  CV_SKILLS_ID,
  CV_THEEND_ID,
} from "../../constant/Const";

const MenuScrollCV = () => {
  return (
    <section className="menu-scroll">
      <ul className="cv-fixed-border flex-col-center gap-5 right-[68px] top-[50%] translate-y-[-50%] text-center p-6 z-20 border-[#575757] w-[55px]">
        <li>
          <a href={CV_HOME_ID} className="menu-icon-link">
            <span className="menu-icon-title">Home</span>
            <i className="las la-home text-[20px]"></i>
          </a>
        </li>
        <li>
          <a href={CV_ABOUT_ID} className="menu-icon-link">
            <span className="menu-icon-title">About</span>
            <i className="las la-user text-[20px]"></i>
          </a>
        </li>
        <li>
          <a href={CV_EXPERIENCE_ID} className="menu-icon-link">
            <span className="menu-icon-title">Experience</span>
            <i className="las la-briefcase text-[20px]"></i>
          </a>
        </li>
        <li>
          <a href={CV_EDUCATION_ID} className="menu-icon-link">
            <span className="menu-icon-title">Education</span>
            <i class="las la-graduation-cap text-[20px]"></i>
          </a>
        </li>
        <li>
          <a href={CV_SKILLS_ID} className="menu-icon-link">
            <span className="menu-icon-title">Skills</span>
            <i class="las la-code text-[20px]"></i>
          </a>
        </li>
        <li>
          <a href={CV_CERTIFICATES_ID} className="menu-icon-link">
            <span className="menu-icon-title">Certificates</span>
            <i class="las la-certificate text-[20px]"></i>
          </a>
        </li>
        <li>
          <a href={CV_THEEND_ID} className="menu-icon-link">
            <span className="menu-icon-title">End</span>
            <i class="las la-handshake text-[20px]"></i>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default MenuScrollCV;
