import { CV_ABOUT_ID } from "../../constant/Const";

const AboutCV = () => {
  return (
    <section id={CV_ABOUT_ID} className="pt-[68px] pb-[75px]">
      <div className="cv-main-container">
        <div className="cv-main-section-container">
          <div className="text-[12px] text-white font-light border-solid-1px border-[#565656] rounded-[30px] px-[20px] py-[5px] mb-[53px] inline-flex items-center">
            <i className="las la-user text-[14px] mr-[10px] mb-[1px]"></i>
            ABOUT
          </div>
          <div className="text-[48px] leading-[60px] text-white font-light mb-[33px]">
            Every day, in every way, <br /> I'm getting{" "}
            <span className="text-primary">better and better</span>
          </div>
          <ul className="max-w-[600px] leading-[30px]">
            <li>I have 2 years of experience in Developer</li>
            <li>Strong experience in Web Application</li>
            <li>
              Strong experience in Sofware Development Life Cycle and Agile,
              Scrum.
            </li>
            <li>English Intermediate level, can communicate fluently</li>
            <li>Experience in team management, training new joiner</li>
            <li>
              Contribute to develop feature purchase with VISA, MASTERCARD,
              AMEX, conversion DBS Point, Campaign...
            </li>
            <li>Back-End: experience in Java, SQL Server... etc</li>
            <li>
              Front-End: experience in JavaScript on ReactJs, React Admin,
              Material UI, Bootstrap, Tailwind... etc
            </li>
            <li>Moreover, I'm a cat lover guy (｡◕‿‿◕｡)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutCV;
