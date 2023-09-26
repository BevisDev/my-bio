import STAR from "../images/start-94.png";

const Experience = () => {
  return (
    <section
      id="experience"
      className="h-[99vh] px-[21rem] pt-[7rem] text-[16px] font-serif bg-white"
    >
      <h1 className="mb-1 text-[3rem]">Experience</h1>
      <div className="project_1">
        <div className="mb-2 flex justify-between">
          <div className="flex items-center gap-2">
            <div className="3_star flex items-center">
              <img className="w-[1rem] h-[1rem]" src={STAR} alt="STAR" />
              <img className="w-[1rem] h-[1rem]" src={STAR} alt="STAR" />
              <img className="w-[1rem] h-[1rem]" src={STAR} alt="STAR" />
            </div>
            <h3 className="text-[20px] text-[#40ced9]">
              <a href="https://www.capitastar.com/sg/en.html" target="blank">
                CapitaStar
              </a>
            </h3>
          </div>
          <div className="joined">August 2022 - January 2024</div>
        </div>
        <div className="description mb-2">
          <span className="border-[1px] bg-yellow-400 p-[3px] text-[17px]">
            Description:
          </span>
          <p>
            This is a loyal application. Client has been built a Product which
            applies to all department of company. This product made by my team
            3rd party company. Now our company is taking responsibility
            maintenance for this product. Besides, analyze data is used in
            application for transfering these data into web report for client.
            The team has to customize product for each of department if
            necessary
          </p>
        </div>
        <div className="description mb-2">
          <span className="border-[1px] bg-yellow-400 p-[3px] text-[17px]">
            Size:
          </span>
          <span>35</span>
        </div>
        <div className="description mb-2">
          <span className="border-[1px] bg-yellow-400 p-[3px] text-[17px]">
            Technologies:
          </span>
          <ul>
            <li>IDE Intelliji, Visual Code, Postman, JMeter</li>
            <li>SQL Server, Redis</li>
            <li>Microsoft Azure, Jira, SharePoint On-premise</li>
            <li>Jenskins, SFTP</li>
          </ul>
        </div>
        <div className="description mb-2">
          <span className="border-[1px] bg-yellow-400 p-[3px] text-[17px]">
            Responsibilities:
          </span>
          <ul>
            <li>Develop application both server side and client side.</li>
            <li>
              Daily, Grooming, call with customers, call tranfer, weekly, retro
            </li>
            <li>
              Get ticket, analyzing this ticket and estimate time or features
              can be impacted.
            </li>
            <li>
              Base on estimation which got approved. We implement to Dev
              environment.
            </li>
            <li>
              After passed on Dev site. We must complete deploy it to Prod site.
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-2" />
      <div className="project_2">
        <div className="mb-2 flex justify-between">
          <div className="flex items-center gap-2">
            <div className="3_star flex items-center">
              <img className="w-[1rem] h-[1rem]" src={STAR} alt="STAR" />
            </div>
            <h3 className="text-[20px] ">
              <a href="#private">Ecommerce Website</a>
            </h3>
          </div>
          <div className="joined">April 2022 - August 2022</div>
        </div>
        <div className="description mb-2">
          <span className="border-[1px] bg-yellow-400 p-[3px] text-[17px]">
            Description:
          </span>
          <p>
            Design and develop a website to sell and manage technology gadgets
            such as computers, laptops, cameras, and manage and control and
            decentralize customers. The application follows MVC pattern and
            layered architecture based on Spring framework. The project team
            needed database design and model integration.
          </p>
        </div>
        <div className="description mb-2">
          <span className="border-[1px] bg-yellow-400 p-[3px] text-[17px]">
            Size:
          </span>
          <span>4</span>
        </div>
        <div className="description mb-2">
          <span className="border-[1px] bg-yellow-400 p-[3px] text-[17px]">
            Technologies:
          </span>
          <span>Eclipse, Visual Code, SQL Server</span>
        </div>
        <div className="description mb-2">
          <span className="border-[1px] bg-yellow-400 p-[3px] text-[17px]">
            Responsibilities:
          </span>
          <div>Develop application both server side and client side.</div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
