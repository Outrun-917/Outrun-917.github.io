import Tech from "./Tech";
import Cta from "./Cta";

function Component({ img, name, techs, projectUrl, codeUrl }) {
  return (
    <article className="mt-10 min-h-96 pb-2.5">
      <img src={img} alt={name} />
      <p className="mt-5 mb-2 font-bold text-2xl">{name}</p>

      <ul className="flex gap-4 text-grey font-medium text-xl mb-5">
        {techs.map((tech) => (
          <Tech key={techs.indexOf(tech)} text={tech} />
        ))}
      </ul>

      <div className="flex gap-8">
        <Cta text="VIEW PROJECT" href={projectUrl} />
        <Cta text="VIEW CODE" href={codeUrl} />
      </div>
    </article>
  );
}

export default Component;
