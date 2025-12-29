import np from "../assets/np_remove_bg.png";

import Cta from "./Cta";

function Component() {
  return (
    <section className="flex flex-col items-center text-center pb-6 border-b border-b-white border-solid">
      <img src={np} alt="Nolan Penfold" />
      <h1 className="font-bold text-4xl mt-10 mb-6">
        Bonjour, je m'appelle{" "}
        <span className="underline decoration-4 decoration-pastel-green underline-offset-8">
          Nolan Penfold
        </span>
        .
      </h1>
      <p className="text-grey font-medium text-xl mb-6">
        Jeune développeur web, je suis passionné par la création de solutions
        claires et intuitives.
      </p>
      {/* <Cta text="ME CONTACTER" href="#" /> */}
    </section>
  );
}

export default Component;
