const PopupWhoBet = () => {
  return (
    <div className="whoBet pt-[40px]">
      <input
        autocomplete="off"
        type="text"
        id="username3"
        placeholder="Enter your username"
        className="p-[15px] w-full block text-[14px] border-[1px] border-solid 
    border-[#f3f3f3] rounded-[4px] bg-transparent text-white outline-none mb-3"
        name="username"
      />
      <input
        autocomplete="off"
        type="number"
        id="username3"
        placeholder="Enter your money"
        className="p-[15px] w-full block text-[14px] border-[1px] border-solid
     border-[#f3f3f3] rounded-[4px] bg-transparent text-white outline-none mb-3"
        name="money"
      />
      <button
        className="p-[15px] w-full block text-[14px] border-[1px] border-solid font-semibold
     border-[#f3f3f3] rounded-[4px] bg-[#f0e191] text-[#6da7f5] outline-none mb-3"
        type="submit"
      >
        Submit
      </button>
    </div>
  );
};

export default PopupWhoBet;
