import NhatNghe from "../../assets/certificates/NhatNghe.jpg";

const NhatNgheCertificate = () => {
  return (
    <section className="w-full h-full select-none flex-col-center p-3 bg-[#f7f5f2] shadow-md rounded-lg">
      <a href="#image">
        <img src={NhatNghe} className="image rounded-lg" alt="PSM1" />
      </a>
      <div className="flex-center flex-col">
        <span className="font-bold my-2">Java Web Developer</span>
        <span className="text-sm mb-5">From: Nhat Nghe</span>
      </div>
    </section>
  );
};

export default NhatNgheCertificate;
