import B1Hutech from "../../assets/certificates/B1Hutech.jpg";

const B1HutechCertificate = () => {
  return (
    <section className="w-full h-full select-none flex-col-center p-3 bg-[#f7f5f2] shadow-md rounded-lg">
      <a href="#image" className="h-[230px]">
        <img src={B1Hutech} className="image rounded-lg" alt="PSM1" />
      </a>
      <div className="flex-center flex-col">
        <span className="font-bold my-2">English CEF B1</span>
        <span className="text-sm mb-5">From: Hutech University</span>
      </div>
    </section>
  );
};

export default B1HutechCertificate;
