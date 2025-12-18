import githubSvg from "../assets/github.svg";
import frontendmentorSvg from "../assets/frontendmentor.svg";
import linkedinSvg from "../assets/linkedin.svg";
import twitterSvg from "../assets/twitter.svg";

function Component() {
  return (
    <header className="w-40 flex flex-col items-center text-center pt-20">
      <nav className="w-40 flex flex-col items-center text-center">
        <a className="mb-5 font-bold text-2xl" href="#">
          NolanPenfold
        </a>
        <ul className="flex flex-row gap-6">
          <li>
            <a href="#">
              <img src={githubSvg} alt="GitHub Logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={frontendmentorSvg} alt="FrontendMentor Logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={linkedinSvg} alt="LinkedIn Logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twitterSvg} alt="Twitter Logo" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Component;
