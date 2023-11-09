const HeaderDashBoard = () => {
  return (
    <header>
      <div>
        <input type="checkbox" id="switch" className="switch-input hidden" />
        <label
          for="switch"
          className="switch relative cursor-pointer w-[50px] h-[25px] block my-auto overflow-hidden shadow-md bg-[#434343] rounded-[100rem]"
        ></label>
      </div>
      <div className="flex-items-center">
        <div className="dashboard-intro py-[19px]">
          <span className="block text-[36px] text-center font-light mb-[20px]">
            Hi, I'm{" "}
            <b className="font-bold text-[#676767]">Trương Thanh Bình</b>
          </span>
          <div
            className="flex gap-3 px-[2rem]
          before:contents-[''] before:border-l-[3px] before:border-l-[#b2b2b2] 
          before:border-l-solid"
          >
            <i>
              "I am a software developer who is always ready to learn and
              explore newer tech stacks."
            </i>
          </div>
        </div>
        <div className="dashboard-avatar min-w-[165px] hover:scale-125">
          <div className="border-[5px] border-[#eaeaec] w-[10rem] h-[10rem] shadow-md rounded-full">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
              className="image-circle transition-transform-100"
              alt="NOT_FOUND_AVATAR"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderDashBoard;
