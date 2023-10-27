const SkillCV = () => {
  return (
    <section id="skills" className="cv-container">
      <h1 className="mb-1">Skills</h1>
      <div>
        <h3>PROGRAMMING LANGUAGES AND TOOLS</h3>
      </div>
      <div className="mt-2">
        <h3>Backend Skills: </h3>
        <div className="cv-list-icon-skills gap-4 flex-items-center">
          <i className="devicon-java-plain-wordmark colored"></i>
          <i className="devicon-csharp-plain-wordmark colored"></i>
        </div>
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios-filled/50/c-sharp-logo.png"
          alt="c-sharp-logo"
        />
      </div>
      <div className="cv-list-icon-skills flex-items-center gap-4 mt-2">
        <i className="devicon-microsoftsqlserver-plain-wordmark colored"></i>
        <i className="devicon-mysql-plain-wordmark colored"></i>
        <i className="devicon-redis-plain-wordmark colored"></i>
        <i className="devicon-azure-plain-wordmark colored"></i>
        <i className="devicon-intellij-plain-wordmark colored"></i>
        <i className="devicon-react-original colored"></i>
        <i className="devicon-javascript-plain colored"></i>
        <i className="devicon-jquery-plain-wordmark colored"></i>
        <i className="devicon-html5-plain-wordmark colored"></i>
        <i className="devicon-css3-plain-wordmark colored"></i>
        <i className="devicon-sass-original colored"></i>
        <i className="devicon-tailwindcss-original-wordmark colored"></i>
        <i className="devicon-unity-original-wordmark"></i>
        <i className="devicon-bootstrap-plain-wordmark colored"></i>
        <i className="devicon-git-plain-wordmark colored"></i>
        <i className="devicon-github-original-wordmark"></i>
        <i className="devicon-vscode-plain-wordmark colored"></i>
      </div>
    </section>
  );
};

export default SkillCV;
