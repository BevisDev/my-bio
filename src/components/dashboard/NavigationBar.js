const NavigationBar = () => {
  return (
    <nav
      className="navbar h-[100vh] w-[250px] bg-primary fixed 
      flex flex-col items-center justify-center text-center"
    >
      <a href="#id" className="navbar_brand mb-5">
        <div>
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
            className="object-cover rounded-full border-solid w-[160px] h-[160px]"
            alt="NOT_FOUND_AVATAR"
            title="Click to zoom image"
          />
        </div>
        <button className="zoomImage hidden cursor-pointer"></button>
      </a>
      <div className="">
        <ul className="flex flex-col item-center gap-4">
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#experience">EXPERIENCE</a>
          </li>
          <li>
            <a href="#education">EDUCATION</a>
          </li>
          <li>
            <a href="#skills">SKILLS</a>
          </li>
          <li>
            <a href="#about">PROJECT</a>
          </li>
          <li>
            <a href="#about">INTERESTS</a>
          </li>
          <li>
            <a href="#the-end">THE END</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
