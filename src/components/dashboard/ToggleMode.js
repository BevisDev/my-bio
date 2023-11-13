const ToggleMode = () => {
  return (
    <div>
      <input type="checkbox" id="switch" className="switch-input hidden" />
      <label
        for="switch"
        className="switch relative cursor-pointer w-[50px] h-[25px] block my-auto overflow-hidden 
        shadow-md bg-[#434343] rounded-[100rem]"
      ></label>
    </div>
  );
};

export default ToggleMode;
