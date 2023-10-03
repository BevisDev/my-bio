import { HUTECH_PATH } from "../../constant/PathConst";
import SHARING from "../../assets/icon/sharing-94.png";

const Education = () => {
  return (
    <section id="education" className="cv-container">
      <h1 className="mb-1">EDUCATION</h1>
      <div>
        <div className="flex justify-between">
          <h3 className="mb-2 text-amber-600">
            <a className="mb-2" href={HUTECH_PATH} target="blank">
              HO CHI MINH CITY UNIVERSITY OF TECHNOLOGY
            </a>
          </h3>
          <div>September 2018 - December 2022</div>
        </div>
        <div className="pr-[15rem]">
          <ul>
            <li className="flex gap-2 mb-2">
              <img
                className="w-[20px] h-[20px] mt-1"
                src={SHARING}
                alt="SHARE"
              />
              <span>
                When I was a student, I studied a lot about career development
                in information technology and then I decided to choose web
                programming because I particularly like customize and draw on my
                websites.
              </span>
            </li>
            <li className="flex gap-2 mb-2">
              <img
                className="w-[20px] h-[20px] mt-1"
                src={SHARING}
                alt="SHARE"
              />
              <span>
                I really enjoy my school, where I make new friends and we study
                together. I also had moments standing on lectern to teach my
                classmates about programming.
              </span>
            </li>
            <li className="flex gap-2 mb-2">
              <img
                className="w-[20px] h-[20px] mt-1"
                src={SHARING}
                alt="SHARE"
              />
              <span>
                After 4 years of college, I have approached to many programming
                languages like Java, ASP.NET, PHP, NodeJs, ReactJs.. and some
                kind of database: SQL Server, MySQL, MongoDB. Besides i used to
                build one game about survival among zombie on UNITY 3D by C#
                language.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;