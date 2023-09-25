import SHARING from "../images/sharing-94.png";

const Education = () => {
  return (
    <section
      id="education"
      className="h-[99vh] pl-[21rem] pt-[7rem] text-[16px] font-serif bg-white"
    >
      <h1 className="mb-1 text-[3rem]">EDUCATION</h1>
      <div className="flex justify-between gap-18">
        <div className="resume-school flex-1">
          <h3 className="mb-2 text-[20px] text-amber-600">
            <a
              className="mb-2"
              href="https://www.hutech.edu.vn/"
              target="blank"
            >
              HO CHI MINH CITY UNIVERSITY OF TECHNOLOGY
            </a>
          </h3>
          <div className="pr-[2rem]">
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
                  programming because I particularly like customize and draw on
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
                  I really enjoy my school, where I make new friends and we
                  study together. I also had moments standing on lectern to
                  teach my classmates about programming.
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
                  MongoDB. Besides i used to build one game about survival among
                  zombie on UNITY 3D by C# language.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="resume-graduated flex-1">
          September 2018 - December 2022
        </div>
      </div>
    </section>
  );
};

export default Education;
