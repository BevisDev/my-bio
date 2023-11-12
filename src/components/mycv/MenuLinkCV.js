import { useState } from "react";
import {
  CV_HOME_ID,
  CV_ABOUT_ID,
  CV_EXPERIENCE_ID,
  CV_EDUCATION_ID,
  CV_SKILLS_ID,
  CV_CERTIFICATES_ID,
  CV_END_ID,
} from "../../constant/Const";
import { handleLinkRefId } from "../utils/CommonUtils";

const MenuLinkCV = () => {
  const [activeItem, setActiveItem] = useState(CV_HOME_ID);

  const handleActiveItemClick = (itemId) => {
    setActiveItem(itemId);
  };

  return (
    <section className="menu-link">
      <ul className="fixed w-[55px] flex-col-center gap-5 right-[68px] top-[50%] translate-y-[-50%] text-center p-6 z-20 border-solid-1px border-[#575757] rounded-[30px]">
        <li>
          <a
            href={handleLinkRefId(CV_HOME_ID)}
            className={`menu-icon-link ${
              activeItem === CV_HOME_ID ? "active" : ""
            }`}
            onClick={() => handleActiveItemClick(CV_HOME_ID)}
          >
            <span className="menu-icon-title">Home</span>
            <i className="las la-home text-[20px]"></i>
          </a>
        </li>
        <li>
          <a
            href={handleLinkRefId(CV_ABOUT_ID)}
            className={`menu-icon-link ${
              activeItem === CV_ABOUT_ID ? "active" : ""
            }`}
            onClick={() => handleActiveItemClick(CV_ABOUT_ID)}
          >
            <span className="menu-icon-title">About</span>
            <i className="las la-user text-[20px]"></i>
          </a>
        </li>
        <li>
          <a
            href={handleLinkRefId(CV_EXPERIENCE_ID)}
            className={`menu-icon-link ${
              activeItem === CV_EXPERIENCE_ID ? "active" : ""
            }`}
            onClick={() => handleActiveItemClick(CV_EXPERIENCE_ID)}
          >
            <span className="menu-icon-title">Experience</span>
            <i className="las la-briefcase text-[20px]"></i>
          </a>
        </li>
        <li>
          <a
            href={handleLinkRefId(CV_EDUCATION_ID)}
            className={`menu-icon-link ${
              activeItem === CV_EDUCATION_ID ? "active" : ""
            }`}
            onClick={() => handleActiveItemClick(CV_EDUCATION_ID)}
          >
            <span className="menu-icon-title">Education</span>
            <i className="las la-graduation-cap text-[20px]"></i>
          </a>
        </li>
        <li>
          <a
            href={handleLinkRefId(CV_SKILLS_ID)}
            className={`menu-icon-link ${
              activeItem === CV_SKILLS_ID ? "active" : ""
            }`}
            onClick={() => handleActiveItemClick(CV_SKILLS_ID)}
          >
            <span className="menu-icon-title">Skills</span>
            <i className="las la-code text-[20px]"></i>
          </a>
        </li>
        <li>
          <a
            href={handleLinkRefId(CV_CERTIFICATES_ID)}
            className={`menu-icon-link ${
              activeItem === CV_CERTIFICATES_ID ? "active" : ""
            }`}
            onClick={() => handleActiveItemClick(CV_CERTIFICATES_ID)}
          >
            <span className="menu-icon-title">Certificates</span>
            <i className="las la-certificate text-[20px]"></i>
          </a>
        </li>
        <li>
          <a
            href={handleLinkRefId(CV_END_ID)}
            className={`menu-icon-link ${
              activeItem === CV_END_ID ? "active" : ""
            }`}
            onClick={() => handleActiveItemClick(CV_END_ID)}
          >
            <span className="menu-icon-title">End</span>
            <i className="las la-handshake text-[20px]"></i>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default MenuLinkCV;
