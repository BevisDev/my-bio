import Instagram from "../images/icon/instagram.png";
import Facebook from "../images/icon/facebook.png";
import Gmail from "../images/icon/gmail.png";
import Gmail48 from "../images/icon/gmail-48.png";
import GitHubGIF from "../images/icon/githubGIF.gif";
import Phone48 from "../images/icon/phone-48.png";
import JavaGIF from "../images/icon/javaGIF.gif";

const About = () => {
  return (
    <section
      id="about"
      className="h-full pl-[21rem] pr-[5rem] pt-[3rem] text-[1rem] font-serif bg-white"
    >
      <h1 className="mb-1 text-[2rem]">TRƯƠNG THANH BÌNH</h1>
      <div className="mb-2 flex items-center space-x-2 text-gray-800 hover:text-orange-600">
        <img className="h-[40px] w-[40px]" src={JavaGIF} alt="JAVA" />
        <span className="pt-[10px] text-[18px]">Java Developer</span>
      </div>
      <div className="contact flex items-center gap-5">
        <a
          href="mailto:dev.binhtt@gmail.com"
          class="flex items-center space-x-2 text-gray-800 dark:text-white hover:text-blue-500"
        >
          <img className="h-[30px] w-[30px]" src={Gmail48} alt="JAVA" />
          <span>dev.binhtt@gmail.com</span>
        </a>
        <a
          href="0901850057"
          class="flex items-center space-x-2 text-gray-800 dark:text-white hover:text-blue-500"
        >
          <img className="h-[30px] w-[30px]" src={Phone48} alt="Phone" />
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
      <span className="border-[1px] bg-yellow-400 p-[3px] text-[1rem]">
        Summary:
      </span>
      <ul className="list-disc mt-2">
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
      <div className="flex justify-center items-center mb-3">
        <a href="mailto:dev.binhtt@gmail.com" target="top">
          <img src={Gmail} alt="GMAIL" />
        </a>
        <a href="https://www.facebook.com/BevisDev" target="blank">
          <img src={Facebook} alt="FACEBOOK" />
        </a>
        <a href="https://www.instagram.com/__tuitenbinh_/" target="blank">
          <img src={Instagram} alt="INSTAGRAM" />
        </a>
        <a href="https://github.com/BevisDev" target="top">
          <img className="w-[90px] h-[90px]" src={GitHubGIF} alt="GITHUB" />
        </a>
      </div>
    </section>
  );
};

export default About;
