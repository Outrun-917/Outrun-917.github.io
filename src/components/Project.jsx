function Component({ img, name, techs, projectUrl, codeUrl }) {
  return (
    <article className="mt-10">
      <img src={img} alt={name} />
      <p>{name}</p>
    </article>
  );
}

export default Component;
