import STAR from "../images/start-94.png";

const Experience = () => {
  return (
    <section
      id="experience"
      className="h-[99vh] px-[21rem] pt-[7rem] text-[16px] font-serif bg-white"
    >
      <h1 className="mb-1 text-[3rem]">Experience</h1>
      <div className="mb-2 flex justify-between">
        <div className="project_1 flex items-center gap-2">
          <div className="3_start flex items-center">
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
          applies to all department of company. This product made by my team 3rd
          party company. Now our company is taking responsibility maintenance
          for this product. Besides, analyze data is used in application for
          transfering these data into web report for client. The team has to
          customize product for each of department if necessary
        </p>
      </div>
    </section>
  );
};

export default Experience;
