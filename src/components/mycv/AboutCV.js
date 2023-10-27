import { CV_ABOUT_ID } from "../../constant/Const";

const AboutCV = () => {
  return (
    <section id={CV_ABOUT_ID} className="py-[90px]">
      <div className="cv-main-container">
        <div className="cv-main-section-container">
          <div className="text-[12px] text-white font-light border-[1px] border-solid border-[#565656] rounded-[30px] px-[20px] py-[5px] mb-[53px] inline-flex items-center">
            <i className="las la-user text-[14px] mr-[10px] mb-[1px]"></i>
            ABOUT
          </div>
          <p className="mb-2">
            - I am an experienced a Full-stack Developer with over 2 years of
            experience in the Web Developing field. I am very quick learner in
            computer related work and can get the hang of something with just a
            few days of practice. I believe that the real hands-on experience,
            the fast learning capability and my adaptability can lead to
            success.
          </p>
          <hr className="mb-2" />
          <span className="border-[1px] border-solid bg-yellow-300 p-[5px] rounded-md">
            Summary:
          </span>
          <ul className="list-disc mt-2 pl-4">
            <li className="mb-1">2+ years of experience in Developer</li>
            <li className="mb-1">
              English Intermediate level, can communicate fluently
            </li>
            <li className="mb-1">Strong experience in Web Application</li>
            <li className="mb-1">
              Strong experience in Sofware Development Life Cycle and Agile,
              Scrum.
            </li>
            <li className="mb-1">
              Experience in team management, training new joiner
            </li>
            <li className="mb-1">
              Experience in fields: Purchase with VISA, MASTERCARD, AMEX, DBS.
            </li>
            <li className="mb-1">
              Back-End: experience in Java, JavaScript, SQL Server...etc
            </li>
            <li className="mb-1">
              Front-End: experience in JavaScript on ReactJs, React Admin,
              Material UI, Bootstrap, Tailwind...etc
            </li>
            <li className="mb-1">Moreover, I'm a cat lover guy (｡◕‿‿◕｡)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutCV;
