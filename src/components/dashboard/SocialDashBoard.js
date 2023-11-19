import { UL_SOCIAL_CV } from "../../constant/Const";
import {
  FACEBOOK_PATH,
  GITHUB_PATH,
  GMAIL_ICON_PATH,
  LINKEDIN_PATH,
  MAIL_TO_ME,
} from "../../constant/PathConst";

const SocialDashBoard = (props) => {
  const { domType } = props;

  return (
    <section className="dashboard-social mb-3">
      <ul
        className={`dashboard-social-list flex-center mt-1 mb-3 ${
          domType === UL_SOCIAL_CV ? "gap-3" : "gap-14"
        } `}
      >
        <li className="text-center">
          <a
            href={FACEBOOK_PATH}
            target="blank"
            className="block h-[60px] w-[60px] rounded-full shadow-md pt-[14px] bg-[#f1f1f2] mb-1"
          >
            <i className="devicon-facebook-plain colored text-[35px]"></i>
          </a>
          <span className="ml-[-10px]">facebook</span>
        </li>
        <li className="text-center">
          <a
            href={LINKEDIN_PATH}
            target="blank"
            className="block h-[60px] w-[60px] rounded-full shadow-md pt-[14px] bg-[#f1f1f2] mb-1"
          >
            <i className="devicon-linkedin-plain colored text-[35px]"></i>
          </a>
          <span className="mt-1">linkedin</span>
        </li>
        <li className="text-center">
          <a
            href={MAIL_TO_ME}
            target="blank"
            className="block h-[60px] w-[60px] rounded-full shadow-md p-[10px] bg-[#f1f1f2] mb-1"
          >
            <img src={GMAIL_ICON_PATH} alt="gmail-new" />
          </a>
          <span className="mt-1">gmail</span>
        </li>
        <li className="text-center">
          <a
            href={GITHUB_PATH}
            target="blank"
            className="block h-[60px] w-[60px] rounded-full shadow-md pt-[14px] bg-[#f1f1f2] mb-1"
          >
            <i className="devicon-github-original colored text-[35px]"></i>
          </a>
          <span className="mt-1">github</span>
        </li>
      </ul>
    </section>
  );
};

export default SocialDashBoard;
