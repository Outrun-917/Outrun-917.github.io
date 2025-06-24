import adamKeyes from "../assets/adamkeyes.png";

import Cta from "./Cta";

function Component() {
  return (
    <section className="flex flex-col items-center text-center pb-23 border-b border-b-white border-solid">
      <img src={adamKeyes} alt="Adam Keyes" />
      <h1 className="font-bold text-4xl mb-6">
        Nice to meet you! I’m{" "}
        <span className="underline decoration-4 decoration-pastel-green underline-offset-8">
          Adam Keyes
        </span>
        .
      </h1>
      <p className="text-grey font-medium text-xl mb-6">
        Based in the UK, I’m a front-end developer passionate about building
        accessible web apps that users love.
      </p>
      <Cta text="CONTACT ME" href="#" />
    </section>
  );
}

export default Component;
