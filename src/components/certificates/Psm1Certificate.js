import PSM1 from "../../assets/certificates/PSM1.jpg";

const Psm1Certificate = () => {
  return (
    <section className="w-full h-full select-none flex-col-center p-3 bg-[#f7f5f2] shadow-md rounded-lg">
      <a href="#image">
        <img src={PSM1} className="image rounded-lg" alt="PSM1" />
      </a>
      <div className="flex-center flex-col">
        <span className="font-bold my-2">Professional Scrum Master 1</span>
        <span className="text-sm mb-5">From: Scrum.org</span>
      </div>
    </section>
  );
};

export default Psm1Certificate;
