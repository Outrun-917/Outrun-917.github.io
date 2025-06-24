import frontendmentorSvg from "../assets/frontendmentor.svg"
import linkedinSvg from "../assets/linkedin.svg"

function Component() {
  return (
    <header className="w-40 flex flex-col items-center text-center pt-5">
      <nav className="w-40 flex flex-col items-center text-center">
        <a className="mb-5 font-bold text-2xl" href="#">
          Adamkeyes
        </a>
        <ul className="flex flex-row gap-6">
          <li>
            <a href="#">
              <img src={frontendmentorSvg}
                alt="FrontendMentor Logo"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={linkedinSvg} alt="LinkedIn Logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/src/assets/twitter.svg" alt="Twitter Logo" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Component;
