import STAR from "../../assets/icon/start-94.png";
import { CV_EXPERIENCE_ID } from "../../constant/Const";
import { CAPITASTAR_PATH } from "../../constant/PathConst";

const ExperienceCV = () => {
  return (
    <section id={CV_EXPERIENCE_ID} className="py-[90px] h-[100vh]">
      <div className="cv-main-container">
        <div className="cv-main-section-container">
          <div className="text-[12px] text-white font-light border-[1px] border-solid border-[#565656] rounded-[30px] px-[20px] py-[5px] mb-[53px] inline-flex items-center">
            <i className="las la-briefcase text-[14px] mr-[10px] mb-[1px]"></i>
            EXPERIENCE
          </div>
          <div className="project_1">
            <div className="mb-2 flex justify-between">
              <div className="flex-items-center gap-2">
                <div className="star-icons flex-items-center">
                  <img className="image" src={STAR} alt="STAR" />
                  <img className="image" src={STAR} alt="STAR" />
                  <img className="image" src={STAR} alt="STAR" />
                </div>
                <h3 className="text-[#40ced9]">
                  <a href={CAPITASTAR_PATH} target="blank">
                    CapitaStar
                  </a>
                </h3>
              </div>
              <div className="joined">August 2022 - Present</div>
            </div>
            <div className="pr-[15rem]">
              <div className="description mb-2">
                <span className="border-[1px] bg-yellow-400 p-[3px]">
                  Description:
                </span>
                <p>
                  This is a Loyalty application which is made by my team. Now
                  our team is taking responsibility maintenance for this
                  product. Besides, analyze data is used in application for
                  transfering these data into web report for client and exposing
                  api for partners integrate.
                </p>
              </div>
              <div className="description mb-2">
                <span className="border-[1px] bg-yellow-400 p-[3px]">
                  Size:
                </span>
                <span>37 member</span>
              </div>
              <div className="description mb-2">
                <span className="border-[1px] bg-yellow-400 p-[3px]">
                  Technologies:
                </span>
                <ul className="list-disc pl-4">
                  <li>IDE Intelliji, Visual Code, Postman, JMeter</li>
                  <li>SQL Server, Redis</li>
                  <li>Microsoft Azure, Jira, SharePoint On-premise</li>
                  <li>Jenskins, SFTP</li>
                </ul>
              </div>
              <div className="description mb-2">
                <span className="border-[1px] bg-yellow-400 p-[3px]">
                  Responsibilities:
                </span>
                <ul className="list-disc pl-4">
                  <li>Develop application both server side and client side.</li>
                  <li>
                    Daily, Grooming, call with customers, call tranfer, weekly,
                    retro
                  </li>
                  <li>
                    Get ticket, analyzing this ticket and estimate time or
                    features can be impacted.
                  </li>
                  <li>
                    Base on estimation which got approved. We implement to Dev
                    environment.
                  </li>
                  <li>
                    After passed on Dev site. We must complete deploy it to Prod
                    site.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceCV;
