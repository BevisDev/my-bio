import PSM1 from "../../assets/certificates/PSM1.jpg";

const CertificateCardCV = () => {
  return (
    <section className="w-full h-full select-none flex-center flex-col p-3 bg-white shadow-md rounded-lg">
      <a href="#image">
        <img src={PSM1} className="image rounded-lg" alt="PSM1" />
      </a>
      <div className="flex-center flex-col">
        <span className="font-bold my-2">Professional Scrum Master 1</span>
        <span className="text-sm opacity-50">September 19, 2023</span>
        <span className="text-sm opacity-50 mb-5">From: Scrum.org</span>
      </div>
    </section>
  );
};

export default CertificateCardCV;
