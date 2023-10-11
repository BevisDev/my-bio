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

const DashBoardSocial = () => {
  return (
    <section className="dashboard-social flex-center gap-16 mt-1 mb-3">
      <div className="flex-col-center">
        <a href={FACEBOOK_PATH} target="blank" className="icon">
          <img className="image" src={FACEBOOK_ICON_PATH} alt="facebook-new" />
        </a>
        <span className="mt-1">facebook</span>
      </div>
      <div className="flex-col-center">
        <a href={INSTAGRAM_PATH} target="blank" className="icon">
          <img src={LINKEDIN_ICON_PATH} alt="linkedin" />
        </a>
        <span className="mt-1">linkedin</span>
      </div>
      <div className="flex-col-center">
        <a href={MAIL_TO_ME} target="blank" className="icon">
          <img src={GMAIL_ICON_PATH} alt="gmail-new" />
        </a>
        <span className="mt-1">gmail</span>
      </div>
      <div className="flex-col-center btn-github">
        <a href={GITHUB_PATH} target="blank" className="icon">
          <img src={GITHUB_ICON_PATH} alt="github" />
        </a>
        <span className="mt-1">github</span>
      </div>
    </section>
  );
};

export default DashBoardSocial;
