import Cta from "./Cta";
import Project from "./Project";

const PROJECTS = [
  {
    img: "/payapi.png",
    name: "PayApi multi page, responsive website",
    techs: ["HTML", "CSS", "JS"],
    projectUrl:
      "https://outrun-917.github.io/payapi-multi-page-website/index.html",
    codeUrl: "https://github.com/Outrun-917/payapi-multi-page-website",
  },
  {
    img: "/forcefour.png",
    name: "Puissance 4",
    techs: ["HTML", "CSS", "JS"],
    projectUrl: "https://outrun-917.github.io/connect-four-game/",
    codeUrl: "https://github.com/Outrun-917/connect-four-game",
  },
  {
    img: "/pswrdgen.png",
    name: "Générateur de mots de passe",
    techs: ["HTML", "CSS", "JAVASCRIPT"],
    projectUrl: "https://outrun-917.github.io/TP_Gererateur_MDP/",
    codeUrl: "https://github.com/Outrun-917/TP_Gererateur_MDP",
  },
  {
    img: "/kevin.png",
    name: "Kevin - Discord App / Bot",
    techs: ["Discord JS"],
    projectUrl:
      "https://discord.com/oauth2/authorize?client_id=1308439406796869682",
    codeUrl: "https://github.com/Outrun-917/Kevin",
  },
];

function Component() {
  return (
    <section className="flex flex-col items-center pb-20">
      <p className="min-w-full flex justify-between font-bold text-4xl">
        <span>Projets</span>
        {/* <Cta text="CONTACT ME" href="#" /> */}
      </p>

      {PROJECTS.map((project) => (
        <Project
          key={project.name}
          img={project.img}
          name={project.name}
          techs={project.techs}
          projectUrl={project.projectUrl}
          codeUrl={project.codeUrl}
        />
      ))}
    </section>
  );
}

export default Component;
