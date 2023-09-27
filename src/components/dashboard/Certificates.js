import PSM1 from "../images/certificates/PSM1.jpg";

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="h-[99vh] px-[21rem] pt-[7rem] text-[16px] font-serif bg-white"
    >
      <h1 className="mb-1 text-[3rem]">CERTIFICATES</h1>
      <div className="cert-item w-[350px]">
        <div className="flex flex-col rounded-lg p-3 bg-slate-300 select-none h-full">
          <a href="#image">
            <img
              src={PSM1}
              className="w-full h-[250px] object-center rounded-lg"
              alt="PSM1"
            />
          </a>
          <div className="flex flex-col flex-1">
            <span className="text-center font-bold my-2">
              Professional Scrum Master 1
            </span>
            <span className="text-sm opacity-50 text-center">
              September 19, 2023
            </span>
            <span className="text-sm opacity-50 text-center mb-5">
              From: Scrum.org
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
