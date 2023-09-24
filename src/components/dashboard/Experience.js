const Experience = () => {
  return (
    <section id="experience" className="h-[100vh] pl-[19rem] bg-white">
      <h1 className="mb-2 text-[3rem]">EXPERIENCE</h1>
      <div className="flex items-center gap-2 text-center text-xs">
        <i>
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 16"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
          </svg>
        </i>
        <span>Java Developer</span>
      </div>
      <div>
        <a href="mailto:dev.binhtt@gmail.com">dev.binhtt@gmail.com</a>
      </div>
      <p>Welcome to visit my CV online!</p>
      <p>Back-End: i am experenced in Java, JavaScript, SQL Server...etc</p>
      <p>
        Front-End: i am experenced in JavaScript on ReactJs, Material UI,
        Bootstrap...etc
      </p>
      <p>Moreover, I'm a cat lover guy (｡◕‿‿◕｡)</p>
    </section>
  );
};

export default Experience;
