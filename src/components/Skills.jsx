import Skill from "./Skill";

const SKILLS = [
  {
    name: "HTML",
    years: "2",
  },
  {
    name: "CSS",
    years: "2",
  },
  {
    name: "Javascript",
    years: "2",
  },
  {
    name: "PHP",
    years: "1",
  },
  {
    name: "React",
    years: "~1",
  },
  {
    name: "React Native",
    years: "~1",
  },
  {
    name: "Git",
    years: "2",
  },
  {
    name: "Figma",
    years: "2",
  },
  {
    name: "Accessibilité",
    years: "2",
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
