import ProjectCard from "./ProjectCard";
import project_1 from "../assets/project-1.jpg";
import project_2 from "../assets/project-2.jpg";
import project_3 from "../assets/project-3.jpg";
import project_4 from "../assets/project-4.png";
import project_5 from "../assets/project-5.png";
import project_6 from "../assets/project-6.png";

const projects = [
  { id: 1, image: project_5, title: "Football Web" },
  { id: 2, image: project_2, title: "Football Web" },
  { id: 3, image: project_3, title: "Football Web" },
  { id: 4, image: project_6, title: "Football Web" },
];

const ProjectList = () => (
  <ul className="list-none flex gap-5 items-center flex-wrap">
    {projects.map((project) => (
      <ProjectCard key={project.id} image={project.image} title={project.title} />
    ))}
  </ul>
);

export default ProjectList;
