const HomeCV = () => {
  return (
    <section className="px-[68px] py-[16px]">
      <div className="cv-main-container">
        <div className="cv-main-section-container">
          <section className="">
            <div className="text-[12px] text-white font-light border-[1px] border-solid border-[#565656] rounded-[30px] px-[20px] py-[5px] mb-[53px] inline-flex items-center">
              <i className="las la-home text-[14px] mr-[10px] mb-[1px]"></i>
              INTRODUCE
            </div>
            <h1 className="text-[78px] text-white leading-[90px] tracking-[-0.2px] mb-11">
              Hi there 👋, I'm {""}
              <span className="text-[#28e98c]">Truong Thanh Binh</span>,
              Software Developer
            </h1>
          </section>
          <p className="max-w-[500px] mb-[31px]">
            I design and code beautifully simple things and i love what i do.
            Just simple like that!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeCV;
