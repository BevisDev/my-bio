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
import { handleStyle } from "../../utils/CommonsUtils";

const SocialDashBoard = (props) => {
  const { eleDOM } = props;

  return (
    <section className="dashboard-social mb-3">
      <ul className={handleStyle(eleDOM)}>
        <li className="text-center">
          <a href={FACEBOOK_PATH} target="blank" className="icon">
            <img
              className="image"
              src={FACEBOOK_ICON_PATH}
              alt="facebook-new"
            />
          </a>
          <span className="ml-[-10px]">facebook</span>
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
