import Cta from "./Cta";
import Project from "./Project";

const PROJECTS = [
  {
    img: "/src/assets/design-portfolio.png",
    name: "DESIGN PORTFOLIO",
    techs: ["HTML", "CSS"],
    projectUrl: "#",
    codeUrl: "#",
  },
  {
    img: "/src/assets/e-learning-landing-page.png",
    name: "E-LEARNING LANDING PAGE",
    techs: ["HTML", "CSS"],
    projectUrl: "https://github.com/Outrun-917/skilled-elearning-landing-page",
    codeUrl:
      "https://github.com/Outrun-917/skilled-elearning-landing-page/blob/main/index.html",
  },
  {
    img: "/src/assets/todo-web-app.png",
    name: "Kevin",
    techs: ["HTML", "CSS", "JAVASCRIPT"],
    projectUrl: "#",
    codeUrl: "#",
  },
  {
    img: "/src/assets/entertainment-web-app.png",
    name: "ENTERTAINMENT WEB APP",
    techs: ["HTML", "CSS", "JAVASCRIPT"],
    projectUrl: "#",
    codeUrl: "#",
  },
  {
    img: "/src/assets/memory-game.png",
    name: "MEMORY GAME",
    techs: ["HTML", "CSS", "JAVASCRIPT"],
    projectUrl: "#",
    codeUrl: "#",
  },
  {
    img: "/src/assets/art-gallery-showcase.png",
    name: "ART GALLERY SHOWCASE",
    techs: ["HTML", "CSS", "JAVASCRIPT"],
    projectUrl: "#",
    codeUrl: "#",
  },
];

function Component() {
  return (
    <section className="flex flex-col items-center pb-20">
      <p className="min-w-full flex justify-between font-bold text-4xl">
        <span>Projects</span>
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
