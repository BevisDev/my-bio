import CatCodes from "../../assets/icon/bongoCatCodes.gif";

const TheEnd = () => {
  return (
    <section id="theEnd" className="cv-container pt-[7rem] font-serif">
      <h1 className="mb-2 text-[3rem]">THE END</h1>
      <p className="mb-2">
        Finally, I would like to say <b>"Thank You"</b> for spent time to look
        at my CV profile.
      </p>
      <p className="mb-2">
        You're a flower on earth, let's make your life beautiful and meaningful
        (◕‿↼)
      </p>
      <img className="w-[28rem] h-[28rem]" src={CatCodes} alt="CAT" />
    </section>
  );
};

export default TheEnd;
