import Skill from "./Skill";

const SKILLS = [
  {
    name: "HTML",
    years: "4",
  },
  {
    name: "CSS",
    years: "4",
  },
  {
    name: "Javascript",
    years: "4",
  },
  {
    name: "Accessibility",
    years: "4",
  },
  {
    name: "React",
    years: "3",
  },
  {
    name: "Sass",
    years: "3",
  },
];

function Component() {
  return (
    <section className="pt-10 pr-4 pl-4 mb-20">
      <ul className="text-center pb-6 border-b border-b-white border-solid">
        {SKILLS.map((skill) => (
          <Skill key={skill.name} name={skill.name} years={skill.years} />
        ))}
      </ul>
    </section>
  );
}

export default Component;
