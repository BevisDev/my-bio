import {
  FACEBOOK_PATH,
  GITHUB_PATH,
  INSTAGRAM_PATH,
  MAIL_TO_ME,
} from "../../constant/PathConst";
import Instagram from "../../assets/icon/instagram.png";
import Facebook from "../../assets/icon/facebook.png";
import Gmail from "../../assets/icon/gmail.png";
import Gmail48 from "../../assets/icon/gmail-48.png";
import GitHubGIF from "../../assets/icon/githubGIF.gif";
import Phone48 from "../../assets/icon/phone-48.png";
import JavaGIF from "../../assets/icon/javaGIF.gif";

const About = () => {
  return (
    <section id="about" className="cv-container">
      <h1 className="mb-1">TRƯƠNG THANH BÌNH</h1>
      <div className="flex-items-center  mb-2 space-x-2 text-gray-800 hover:text-orange-600">
        <div className="h-[32px] w-[32px]">
          <img className="image" src={JavaGIF} alt="JAVA" />
        </div>
        <span className="pt-[10px] text-[18px]">Java Developer</span>
      </div>
      <div className="contact flex-items-center gap-5">
        <a
          href="mailto:dev.binhtt@gmail.com"
          class="flex-items-center space-x-2 text-gray-800 dark:text-white hover:text-blue-500"
        >
          <div className="h-[30px] w-[30px]">
            <img className="image" src={Gmail48} alt="JAVA" />
          </div>
          <span>dev.binhtt@gmail.com</span>
        </a>
        <a
          href="0901850057"
          class="flex-items-center space-x-2 text-gray-800 dark:text-white hover:text-blue-500"
        >
          <div className="h-[30px] w-[30px]">
            <img className="image" src={Phone48} alt="Phone" />
          </div>
          <span>0901850057</span>
        </a>
      </div>
      <div class="marquee-container my-1 text-[28px]">
        <span class="marquee-content">Welcome to visit my CV online!</span>
      </div>
      <p className="mb-2">
        - I am an experienced a Full-stack Developer with over 2 years of
        experience in the Web Developing field. I am very quick learner in
        computer related work and can get the hang of something with just a few
        days of practice. I believe that the real hands-on experience, the fast
        learning capability and my adaptability can lead to success.
      </p>
      <hr className="mb-2" />
      <span className="border-[1px] bg-yellow-400 p-[3px]">Summary:</span>
      <ul className="list-disc mt-2 pl-4">
        <li className="mb-1">2+ years of experience in Developer</li>
        <li className="mb-1">
          English Intermediate level, can communicate fluently
        </li>
        <li className="mb-1">Strong experience in Web Application</li>
        <li className="mb-1">
          Strong experience in Sofware Development Life Cycle and Agile, Scrum.
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
          Front-End: experience in JavaScript on ReactJs, React Admin, Material
          UI, Bootstrap, Tailwind...etc
        </li>
        <li className="mb-1">Moreover, I'm a cat lover guy (｡◕‿‿◕｡)</li>
      </ul>
      <h2 className="text-[18px] mb-2" align="center">
        👽 Where to find me 👽
      </h2>
      <div className="flex-center mb-3">
        <a href={MAIL_TO_ME} target="blank">
          <img src={Gmail} alt="GMAIL" />
        </a>
        <a href={FACEBOOK_PATH} target="blank">
          <img src={Facebook} alt="FACEBOOK" />
        </a>
        <a href={INSTAGRAM_PATH} target="blank">
          <img src={Instagram} alt="INSTAGRAM" />
        </a>
        <a href={GITHUB_PATH} className="w-[85px] h-[85px]" target="blank">
          <img className="image" src={GitHubGIF} alt="GITHUB" />
        </a>
      </div>
    </section>
  );
};

export default About;
