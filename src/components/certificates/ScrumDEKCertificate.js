import ScrumDEK from "../../assets/certificates/ScrumDEK.jpg";

const ScrumDEKCertificate = () => {
  return (
    <section className="w-full h-full select-none flex-col-center p-3 bg-[#f7f5f2] shadow-md rounded-lg">
      <a href="#image">
        <img src={ScrumDEK} className="image rounded-lg" alt="PSM1" />
      </a>
      <div className="flex-center flex-col">
        <span className="font-bold my-2">Agile & Scrum Training</span>
        <span className="text-sm mb-5">From: DEK Technologies</span>
      </div>
    </section>
  );
};

export default ScrumDEKCertificate;
