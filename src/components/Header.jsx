function Component() {
  return (
    <header className="w-96 flex flex-col items-center text-center">
      <nav className="w-96 flex flex-col items-center text-center">
        <a href="#">Adamkeyes</a>
        <ul className="flex flex-row gap-6">
          <li>
            <a href="#">
              <img src="/src/assets/github.svg" alt="Github Logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="/src/assets/frontendmentor.svg"
                alt="FrontendMentor Logo"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/src/assets/linkedin.svg" alt="LinkedIn Logo" />
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
