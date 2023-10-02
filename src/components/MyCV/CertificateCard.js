import PSM1 from "../../assets/certificates/PSM1.jpg";

const CertificateCard = () => {
  return (
    <section className="w-full h-full select-none flex flex-col p-3 bg-white shadow-md rounded-lg">
      <a href="#image">
        <img
          src={PSM1}
          className="w-full h-full object-center rounded-lg"
          alt="PSM1"
        />
      </a>
      <div className="flex flex-col">
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
    </section>
  );
};

export default CertificateCard;
