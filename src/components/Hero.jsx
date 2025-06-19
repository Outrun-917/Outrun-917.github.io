function Component() {
  return (
    <section className="flex flex-col items-center text-center pb-23 border-b border-b-white border-solid">
      <img className="mb-10" src="/src/assets/adamkeyes.png" alt="Adam Keyes" />
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
      <a
        className="tracking-widest underline decoration-2 decoration-pastel-green underline-offset-12 font-bold text-xl"
        href="#"
      >
        CONTACT ME
      </a>
    </section>
  );
}

export default Component;
