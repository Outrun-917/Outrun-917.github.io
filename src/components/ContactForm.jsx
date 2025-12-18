function Component() {
  return (
    <div className="pl-4 pr-4 bg-dark-grey">
      <section className="pt-15 pb-22 border-transparent border-b-2 border-b-white">
        <h3 className="text-center mb-5 font-bold text-4xl">CONTACT</h3>
        <p className="text-center mb-12 font-medium text-xl text-grey">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>

        <form action="" className="flex flex-col">
          <label htmlFor="name" className="sr-only">
            Name:
          </label>
          <input
            className="font-medium text-xl pl-6 pb-4 min-w-full mb-8 border-transparent border-b-2 border-b-white outline-0"
            type="text"
            name="name"
            placeholder="NAME"
          />

          <label htmlFor="email" className="sr-only">
            Email:
          </label>
          <input
            className="font-medium text-xl pl-6 pb-4 min-w-full mb-8 border-transparent border-b-2 border-b-white outline-0"
            type="text"
            name="email"
            placeholder="EMAIL"
          />

          <label htmlFor="message" className="sr-only">
            Message:
          </label>
          <textarea
            className="font-medium text-xl pl-6 min-h-27 min-w-full mb-8 border-transparent border-b-2 border-b-white outline-0"
            name="message"
            placeholder="MESSAGE"
          ></textarea>

          <input
            className="max-w-fit ml-auto text-xl tracking-widest pb-3.5 border-b-2 border-b-pastel-green"
            type="submit"
            value="SEND MESSAGE"
          />
        </form>
      </section>
    </div>
  );
}

export default Component;
