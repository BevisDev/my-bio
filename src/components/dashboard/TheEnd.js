import CatCodes from "../images/bongoCatCodes.gif";

const TheEnd = () => {
  return (
    <section
      id="the-end"
      className="h-[99vh] px-[21rem] pt-[7rem] text-[16px] font-serif"
    >
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
