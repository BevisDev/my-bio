import { HUTECH_PATH } from "../../constant/PathConst";
import SHARING from "../../assets/icon/sharing-94.png";
import { CV_EDUCATION_ID } from "../../constant/Const";

const EducationCV = () => {
  return (
    <section id={CV_EDUCATION_ID} className="pt-[90px]">
      <div className="cv-main-container">
        <div className="cv-main-section-container">
          <div className="education-header">
            <div className="text-[12px] text-white font-light border-[1px] border-solid border-[#565656] rounded-[30px] px-[20px] py-[5px] mb-[53px] inline-flex items-center">
              <i className="las la-graduation-cap text-[14px] mr-[10px] mb-[1px]"></i>
              EDUCATION
            </div>
            <div className="text-[48px] leading-[60px] text-white font-light mb-9">
              My <span className="text-primary">Education</span>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <h3 className="mb-2 text-amber-600">
                <a className="mb-2" href={HUTECH_PATH} target="blank">
                  HO CHI MINH CITY UNIVERSITY OF TECHNOLOGY
                </a>
              </h3>
              <div>September 2018 - December 2022</div>
            </div>
            <div className="pr-[17rem]">
              <ul>
                <li className="flex gap-2 mb-2">
                  <img
                    className="w-[20px] h-[20px] mt-1"
                    src={SHARING}
                    alt="SHARE"
                  />
                  <span>
                    When I was a student, I studied a lot about career
                    development in IT and then I decided to choose software
                    technology because I particularly like customize and draw on
                    my websites.
                  </span>
                </li>
                <li className="flex gap-2 mb-2">
                  <img
                    className="w-[20px] h-[20px] mt-1"
                    src={SHARING}
                    alt="SHARE"
                  />
                  <span>
                    After 4 years of college, I have approached to many
                    programming languages like Java, ASP.NET, PHP, NodeJs,
                    ReactJs.. and some kind of database: SQL Server, MySQL,
                    MongoDB. Besides i used to build a game hunt and survival
                    among zombie on Unity 3D by C# language and used to build an
                    application like GRAB on Android Studio by Java
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCV;
