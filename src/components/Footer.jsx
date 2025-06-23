function Component() {
  return (
    <footer className="min-w-full bg-dark-grey flex pt-10 pb-15">
      <nav className="w-40 ml-auto mr-auto flex flex-col items-center text-center">
        <a className="mb-5 font-bold text-2xl" href="#">
          Adamkeyes
        </a>
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
    </footer>
  );
}

export default Component;
