const HeaderDashBoard = () => {
  return (
    <header className="dashboard-header flex-items-center">
      <div className="dashboard-intro">
        <h3 className="dashboard-title text-center hover:text-blue-400 cursor-pointer">
          Hi, I'm <b className="font-bold">Thanh Bình</b>
        </h3>
        <div className="dashboard-desc flex gap-2 px-[1.5rem] relative">
          <div className="dashboard-col absolute h-full left-3 bottom-0 border-l-[3px] border-l-[#d5d5d7] border-l-solid"></div>
          <i>
            "My name is <b>Trương Thanh Bình (Bevis)</b>. I am a software
            developer who is always ready to learn and explore newer tech
            stacks."
          </i>
        </div>
      </div>
      <div className="dashboard-avatar min-w-[165px]">
        <div className="border-[5px] border-[#eaeaec] w-[10rem] h-[10rem] shadow-md rounded-full">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
            className="image-circle"
            alt="NOT_FOUND_AVATAR"
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderDashBoard;
