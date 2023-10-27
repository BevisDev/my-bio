import { CV_SOCIAL_TYPE, UL_DASHBOARD } from "../../constant/Const";
import {
  FACEBOOK_ICON_PATH,
  FACEBOOK_PATH,
  GITHUB_ICON_PATH,
  GITHUB_PATH,
  GMAIL_ICON_PATH,
  LINKEDIN_ICON_PATH,
  INSTAGRAM_PATH,
  MAIL_TO_ME,
} from "../../constant/PathConst";

const SocialDashBoard = (props) => {
  const { type } = props;

  const handleSassByType = (ele, type) => {
    let result = "";
    switch (ele) {
      case UL_DASHBOARD:
        type === CV_SOCIAL_TYPE
          ? (result = "flex-center mt-1 mb-3 gap-3")
          : (result = "flex-center mt-1 mb-3 gap-16");
        break;
      default:
        break;
    }
    return result;
  };

  return (
    <section className="dashboard-social mb-3">
      <ul className={handleSassByType(UL_DASHBOARD, type)}>
        <li className="text-center">
          <a href={FACEBOOK_PATH} target="blank" className="icon">
            <img
              className="image"
              src={FACEBOOK_ICON_PATH}
              alt="facebook-new"
            />
          </a>
          <span className="mt-1">facebook</span>
        </li>
        <li className="text-center">
          <a href={INSTAGRAM_PATH} target="blank" className="icon">
            <img src={LINKEDIN_ICON_PATH} alt="linkedin" />
          </a>
          <span className="mt-1">linkedin</span>
        </li>
        <li className="text-center">
          <a href={MAIL_TO_ME} target="blank" className="icon">
            <img src={GMAIL_ICON_PATH} alt="gmail-new" />
          </a>
          <span className="mt-1">gmail</span>
        </li>
        <li className="text-center">
          <a href={GITHUB_PATH} target="blank" className="icon">
            <img src={GITHUB_ICON_PATH} alt="github" />
          </a>
          <span className="mt-1">github</span>
        </li>
      </ul>
    </section>
  );
};

export default SocialDashBoard;
